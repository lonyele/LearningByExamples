


object Schemaa {
  import sangria.schema._
  import sangria.macros.derive._

  val SavedTab = deriveObjectType[MyContext, SavedTab]()
//  val SavedTab = ObjectType(   //흠... apollo라면 이것들 Field 하나하나가 내가 각각 로직 또 해주는거임. mongodb _id -> id로 바꾸는 로직처럼
//    "whatThe",                 //이런거 없으면 deriveObjectType으로 하면 될듯.
//    "fuck????",
//    fields[MyContext, SavedTab](
//      Field("title", StringType, resolve = _.value.title),
//      Field("url", StringType, resolve = _.value.url)
//    )
//  )
  val QueryType = ObjectType(   //deriveContextObjectType[Mydata, Query, Unit] , ...[Mydata, Mutation, Unit] 이렇게?
    "Query",
    fields[MyData, Unit](
      Field("initialSavedTab", OptionType(SavedTab), resolve = ctx => ctx.ctx.initialSavedTab()),
      Field("allSavedTab", ListType(SavedTab), resolve = ctx => ctx.ctx.allSavedTab()),
    )
  )

  val TitleArg = Argument("title", StringType)
  val UrlArg = Argument("url", StringType)
  //val MutationType = deriveContextObjectType[MyData, whatThe, Unit](identity)  //버그여서 지금 못씀 https://github.com/sangria-graphql/sangria/pull/317/commits/c70928f619c7f7084ba62bdee2914fd5b9bdad6f

  val MutationType = ObjectType(
    "Mutation",
    fields[MyData, Unit](
      Field("addSavedTab", SavedTab,
        arguments = TitleArg :: UrlArg :: Nil,
        resolve = ctx => ctx.ctx.addSavedTab(ctx.arg(TitleArg),ctx.arg(UrlArg))),
    )
  )



  val schema = Schema(QueryType, Some(MutationType))

}
