import sangria.macros.derive.GraphQLField

class MyData extends whatThe {
  import MyData._
  //def getUser(id: Int): Option[User] = users.find(_.id == id)
  def initialSavedTab(): Option[SavedTab] = tabs.find(tab => tab.title == "Initial Tab Title")
  def allSavedTab(): List[SavedTab] = tabs


}
object MyData {
  val users = List(
    User(
      id = 1,
      name = "Initial User",
      email = "Initial Email"
    )
  )
  var tabs = List(
    SavedTab(
      title = "Initial Tab Title",
      url = "Initial Tab url"
    ),
    SavedTab(
      title = "Second Tab Title",
      url = "Second Tab url"
    )
  )
}


case class User(id: Int, name:String, email:String)
case class SavedTab(title: String, url: String)
//case class SavedWindow()
import MyData.tabs

trait whatThe {
  //this: MyData ⇒

  @GraphQLField
  def addSavedTab(title: String, url: String): SavedTab = {
    val newSavedTab = SavedTab(title = title, url = url)
    tabs = tabs :+ newSavedTab
    newSavedTab
  }
}