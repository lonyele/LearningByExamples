
import java.util.Properties

import scala.collection.JavaConverters._
import org.apache.kafka.clients.consumer.{ConsumerRecord, KafkaConsumer}
import org.apache.kafka.common.serialization.{LongDeserializer, StringDeserializer}


object KafkaConsumer extends App {
  override def main(args: Array[String]): Unit = {
    val TOPIC="test"
    val properties = new Properties()

    properties.put("bootstrap.servers", "127.0.0.1:9092")
    properties.put("key.deserializer", classOf[StringDeserializer])
    properties.put("value.deserializer", classOf[LongDeserializer])

    properties.setProperty("group.id", "test")
    properties.setProperty("enable.auto.commit", "false")
    properties.setProperty("auto.offset.reset", "earliest")

    val consumer = new KafkaConsumer[String, Long](properties)
    val what = Array("WordsWithCountsTopic6")
    consumer.subscribe(asJavaCollection(what))

    while(true) {
      val consumerRecord = consumer.poll(100).asScala
      println(consumerRecord)
      for ( data <- consumerRecord) {
        println("partition: "+ data.partition() + ", Offset: " + data.offset() + " Key: " + data.key() + ", Value: " + data.value())
      }
      consumer.commitSync()
    }
  }
}