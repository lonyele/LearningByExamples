name := "ScalaForImpatient"

version := "0.1"

scalaVersion := "2.12.4"

// https://mvnrepository.com/artifact/org.apache.kafka/kafka-clients
libraryDependencies ++= {
  Seq(
    "org.apache.kafka" % "kafka_2.12" % "1.0.0",
    "org.apache.kafka" % "kafka-clients" % "1.0.0",
    "org.apache.kafka" % "kafka-streams" % "0.11.0.2"

  )
}