import java.util.UUID

import sangria.macros.derive.GraphQLField
import MyData._

//trait Mutation {
//  this: Ctx ⇒
//
//  @GraphQLField
//  def saveSessionTab(title: String, url: String) = {
//    println("Mutation이 saveSessionTab def 안임.")
//    val window = SaveSessionWindow(UUID.randomUUID.toString, title, url)
//    val newWindow = window :: MyData.users
//    newWindow
//  }
//
//}
//
//
//case class SaveSessionWindow(id: String, title: String, url: String)



//
//implicit val UserType = deriveObjectType[MyCtx, User]()
//val MutationType = deriveContextObjectType[MyCtx, Mutation, Unit](_.mutation)