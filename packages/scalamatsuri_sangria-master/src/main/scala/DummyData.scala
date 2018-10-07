/**
  * Created by Yuki Katada on 1/10/17.
  *
  * ダミーデータをレポジトリに格納、及び取得を行います。
  * 通常はほとんどのケースDBなどからSlickなどを使用し、データ取得を行います。
  */
class DummyDataRepo {
  import DummyData._

  // ユーザーデータをIDから取得します
  def getUser(id: Int): Option[User] = users.find(_.id == id)

  // 本データをIDから取得します
  def getBook(id: Int): Option[Book] = books.find(_.id == id)

  // 企業一覧を取得します
  def listCompanies: Seq[Company] = companies
}

object DummyData {

  // ユーザーのダミーデータ
  val users = List(
    User(
      id = 1,
      name = "Sato",
      email = "sato@cyberagent.co.jp"
    ),
    User(
      id = 2,
      name = "Tanaka",
      email = "tanaka@cyberagent.co.jp"
    ),
    User(
      id = 3,
      name = "Fujita",
      email = "fujita@cyberagent.co.jp"
    )
  )

  // 本のダミーデータ
  val books = List(
    Book(
      id = 1,
      name = "GraphQL in Scala",
      publisher = "ScalaMatsuri Publisher"
    ),
    Book(
      id = 2,
      name = "Introduction to GraphQL",
      publisher = "GraphQL Publisher"
    )
  )

  // 企業のダミーデータ
  val companies = List(
    Company(
      id = 1,
      name = "CyberAgent Inc.",
      genre = "IT"
    ),
    Company(
      id = 2,
      name = "KTD Inc.",
      genre = "Cosmetic"
    )
  )
}

case class User(id: Int, name: String, email: String)

case class Book(id: Int, name: String, publisher: String)

case class Company(id: Int, name: String, genre: String)
