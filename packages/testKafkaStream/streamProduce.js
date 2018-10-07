const config = {
  //zkConStr: "localhost:2181/",
  kafkaHost: "localhost:9092", //either kafkaHost or zkConStr
  logger: {
    debug: msg => console.log(msg),
    info: msg => console.log(msg),
    warn: msg => console.log(msg),
    error: msg => console.error(msg)
  },
  groupId: "kafka-streams-whatwhat",
  clientName: "kafka-streams-test-name",
  workerPerPartition: 1,
  options: {
      sessionTimeout: 8000,
      protocol: ["roundrobin"],
      fromOffset: "earliest", //latest
      fetchMaxBytes: 1024 * 100,
      fetchMinBytes: 1,
      fetchMaxWaitMs: 10,
      heartbeatInterval: 250,
      retryMinTimeout: 250,
      autoCommit: true,
      autoCommitIntervalMs: 1000,
      requireAcks: 1,
      ackTimeoutMs: 100,
      partitionerType: 3
  }
}

const {KafkaStreams} = require("kafka-streams");
const kafkaStreams = new KafkaStreams(config);

const kafkaTopicName = "testing111";
const stream = kafkaStreams.getKStream(kafkaTopicName);
stream.to("my-topic");
stream.forEach(message => console.log(message));
stream.start().then(() => {
    console.log("stream started, as kafka consumer is ready.");
    stream.writeToStream("my message from stream producer");
    stream.writeToStream("another message stream producer");
    stream.writeToStream([
        "even more",
        "messages"
    ]);
}, error => {
    console.log("streamed failed to start: " + error);
});