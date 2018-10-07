import java.lang.Long
import java.util.Properties
import java.util.concurrent.TimeUnit

import org.apache.kafka.common.serialization._
import org.apache.kafka.streams._
import org.apache.kafka.streams.kstream.{KStream, KStreamBuilder, KTable}

import scala.collection.JavaConverters.asJavaIterableConverter

object KafkaStream0110 {

  def main(args: Array[String]) {
    val config: Properties = {
      val p = new Properties()
      p.put(StreamsConfig.APPLICATION_ID_CONFIG, "wordcount-application6")
      p.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092")
      p.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass)
      p.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass)
      p
    }

    val builder: KStreamBuilder = new KStreamBuilder()
    val textLines: KStream[String, String] = builder.stream("TextLinesTopic6")
    println(textLines)
    val wordCounts: KTable[String, Long] = textLines
      .flatMapValues(textLine => textLine.toLowerCase.split("\\W+").toIterable.asJava)
      .groupBy((_, word) => {println(word);word})
      .count("Counts")
    wordCounts.to(Serdes.String(), Serdes.Long(), "WordsWithCountsTopic6")

    val streams: KafkaStreams = new KafkaStreams(builder, config)
    streams.start()
    println(streams.toString)
    Runtime.getRuntime.addShutdownHook(new Thread(() => {
      streams.close(10, TimeUnit.SECONDS)
    }))
  }

}
