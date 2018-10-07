/*
import java.lang.Long
import java.util.Properties
import java.util.concurrent.TimeUnit

import org.apache.kafka.common.serialization._
import org.apache.kafka.common.utils.Bytes
import org.apache.kafka.streams._
import org.apache.kafka.streams.kstream._
import org.apache.kafka.streams.kstream.internals.PrintForeachAction
import org.apache.kafka.streams.state.KeyValueStore

import scala.collection.JavaConverters.asJavaIterableConverter

object KafkaStream {

  def main(args: Array[String]) {
    val config: Properties = {
      val p = new Properties()
      p.put(StreamsConfig.APPLICATION_ID_CONFIG, "wordcount-application5")
      p.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092")
      p.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass)
      p.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass)
      p
    }

    val builder: StreamsBuilder = new StreamsBuilder()
    val textLines: KStream[String, String] = builder.stream("TextLinesTopic5")

    val wordCounts: KTable[String, Long] = textLines
      .flatMapValues(textLine => textLine.toLowerCase.split("\\W+").toIterable.asJava)
      .groupBy((_, word) => {println(word); word})
      .count("pleaseWork")

      //.count(Materialized.as("counts-store").asInstanceOf[Materialized[String, Long, KeyValueStore[Bytes, Array[Byte]]]])





    wordCounts.toStream().to("WordsWithCountsTopic5", Produced.`with`(Serdes.String(), Serdes.Long()))

    val streams: KafkaStreams = new KafkaStreams(builder.build(), config)
    streams.start()

    Runtime.getRuntime.addShutdownHook(new Thread(() => {
      streams.close(10, TimeUnit.SECONDS)
    }))
  }

}
*/