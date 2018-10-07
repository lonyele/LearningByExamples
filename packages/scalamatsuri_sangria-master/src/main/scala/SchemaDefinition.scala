/**
  * Created by Yuki Katada on 1/10/17.
  *
  * ここではスキーマ定義を行っています。
  * 事前にリクエストが来た時どういうオブジェクトを返すのか構造体を定義しておきます。
  */
object SchemaDefinition {
  import sangria.schema._

  // これが単一エンドポイントとなります
  val ScalaMatsuriSchema = Schema(Query)

  // パラメータの断片を定義します
  lazy val ID = Argument("id", IntType, description = "id")

  // オブジェクト型の定義をします
  lazy val Query = ObjectType(
    "Query",
    fields[DummyDataRepo, Unit](
      Field(
        "user",
        OptionType(User), // sangria.schemaパッケージ内に実装されているType「~Type」で包んで引数に渡す
        arguments = ID :: Nil,
        resolve = ctx => ctx.ctx.getUser(ctx.arg(ID))
      ),
      Field(
        "book",
        OptionType(Book),
        arguments = ID :: Nil,
        resolve = ctx => ctx.ctx.getBook(ctx.arg(ID))
      ),
      Field(
        "companies",
        ListType(Company),
        resolve = ctx => ctx.ctx.listCompanies
      )
    )
  )

  lazy val User: ObjectType[MyCtx, User] = ObjectType(
    "User",
    "A dummy user for ScalaMatsuri 2017",
    fields[MyCtx, User](
      Field("id", IntType, resolve = _.value.id),
      Field("name", StringType, resolve = _.value.name),
      Field("email", StringType, resolve = _.value.email)
    )
  )

  lazy val Book: ObjectType[MyCtx, Book] = ObjectType(
    "Book",
    "A dummy book for ScalaMatsuri 2017",
    fields[MyCtx, Book](
      Field("id", IntType, resolve = _.value.id),
      Field("name", StringType, resolve = _.value.name),
      Field("publisher", StringType, resolve = _.value.publisher)
    )
  )

  lazy val Company: ObjectType[MyCtx, Company] = ObjectType(
    "Company",
    "A dummy company for ScalaMatsuri 2017",
    fields[MyCtx, Company](
      Field("id", IntType, resolve = _.value.id),
      Field("name", StringType, resolve = _.value.name),
      Field("genre", StringType, resolve = _.value.genre)
    )
  )
}

trait MyCtx { /** ここにコンテキストを記述 **/ }