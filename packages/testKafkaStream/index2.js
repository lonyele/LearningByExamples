console.log("okok");

const config = {
  //zkConStr: "localhost:2181/",
  kafkaHost: "localhost:9092", //either kafkaHost or zkConStr
  logger: {
    debug: msg => console.log(msg),
    info: msg => console.log(msg),
    warn: msg => console.log(msg),
    error: msg => console.error(msg)
  },
  groupId: "SavedWindowsTest1",
  clientName: "SavedWindowsTest111",
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

const kafkaTopicName = "SavedWindows";
const stream = kafkaStreams.getKStream(kafkaTopicName);
stream.forEach(message => console.log(message));
stream.start().then(() => {
    console.log("stream started, as kafka consumer is ready.");
}, error => {
    console.log("streamed failed to start: " + error);
});