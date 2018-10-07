name := "LearnMySangriaExample"

version := "0.1"

scalaVersion := "2.12.4"

scalacOptions ++= Seq("-deprecation", "-feature")

libraryDependencies ++= Seq(
  "org.sangria-graphql" %% "sangria" % "1.3.0",
  "org.sangria-graphql" %% "sangria-spray-json" % "1.0.0",
  "com.typesafe.akka" %% "akka-http" % "10.0.10",
  "com.typesafe.akka" %% "akka-http-spray-json" % "10.0.10",
  //"io.github.sac" % "SocketclusterClientJava" % "1.7.2",
  //"com.apollographql.apollo" % "apollo-runtime" % "0.4.3",


)
//resolvers += Resolver.jcenterRepo