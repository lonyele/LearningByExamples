name := "fuckKafka"

version := "0.1"

scalaVersion := "2.12.4"
libraryDependencies ++= {
  Seq(

    "org.apache.kafka" % "kafka-clients" % "0.11.0.2",
    "org.apache.kafka" % "kafka-streams" % "0.11.0.2"

  )
}