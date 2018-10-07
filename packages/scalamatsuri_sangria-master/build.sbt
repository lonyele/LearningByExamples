name := "scalamatsuri_sangria"

version := "1.0"

scalaVersion := "2.11.8"

resolvers += "Typesafe Repository" at "http://repo.typesafe.com/typesafe/releases/"

libraryDependencies ++= {
  Seq(
    "org.sangria-graphql" %% "sangria"            % "1.0.0-RC5",
    "org.sangria-graphql" %% "sangria-spray-json" % "0.3.2",
    "com.typesafe.akka"   %% "akka-http-experimental" % "2.4.11",
    "com.typesafe.akka"   %% "akka-http-spray-json-experimental" % "2.4.11"
  )
}
