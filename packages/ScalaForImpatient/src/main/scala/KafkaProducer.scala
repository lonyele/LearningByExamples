import java.util.Properties

import org.apache.kafka.clients.producer.{KafkaProducer, ProducerRecord}
import org.apache.kafka.common.serialization.StringSerializer

object KafkaProducer extends App {
  override def main(args: Array[String]): Unit = {
    val properties = new Properties()
    properties.put("bootstrap.servers", "127.0.0.1:9092")
    properties.put("key.serializer", classOf[StringSerializer])
    properties.put("value.serializer", classOf[StringSerializer])

    properties.setProperty("acks", "1")
    properties.setProperty("retries", "3")
    properties.setProperty("linger.ms", "1")

    val producer = new KafkaProducer[String, String](properties)
    val producerRecord = new ProducerRecord[String, String]("TextLinesTopic5","6", "fuck kafka fuck scala ")
    producer.send(producerRecord)
    producer.close()
  }
}