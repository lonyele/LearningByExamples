import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.server._
import akka.stream.ActorMaterializer
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import sangria.parser.QueryParser
import sangria.execution.{ErrorWithResolver, Executor, QueryAnalysisError}
import sangria.marshalling.sprayJson._
import spray.json._

import scala.util.{Failure, Success}

object Main extends App {
  implicit val system = ActorSystem("sangria-server")
  implicit val materializer = ActorMaterializer()

  import system.dispatcher

  val route: Route =
    (post & path("graphql")) {
      entity(as[JsValue]) { requestJson ⇒
        val JsObject(fields) = requestJson

        val JsString(query) = fields("query")

        val operation = fields.get("operationName") collect {
          case JsString(op) ⇒ op
        }

        val vars = fields.get("variables") match {
          case Some(obj: JsObject) ⇒ obj
          case _ ⇒ JsObject.empty
        }

        QueryParser.parse(query) match {

          case Success(queryAst) =>
            complete(
              Executor.execute(
                SchemaDefinition.ScalaMatsuriSchema,
                queryAst,
                new DummyDataRepo,
                variables = vars,
                operationName = operation)
                .map(OK → _)
                .recover {
                  case error: QueryAnalysisError ⇒ BadRequest → error.resolveError
                  case error: ErrorWithResolver ⇒ InternalServerError → error.resolveError
                })

          case Failure(e) =>
            complete(s"${e.getMessage}")
        }
      }
    }

  Http().bindAndHandle(route, "localhost", sys.props.get("http.port").fold(1234)(_.toInt))
}
