const express = require("express");
const app = express();
const port = 5500;

const { Producer } = require("sinek");

let producer;
let producerIsReady = false;
const compressionType = 0;
const version = 1;

const kafkaConfig = () => {
  const partitions = 1; //make sure the topic exists and has the given amount of partitions (relates to kafka broker config setup)
  const config = {
    //either one of the following, if you want to connect directly to the broker
    //you should omit the zkConStr field and just provide kafkaHost
    //zkConStr: "localhost:2181/kafka", 여기에다가 하면 자동으로 leader로 가게 해주나?
    // kafkaHost: "my-release-kafka.default.svc.cluster.local:9092", //no trailing slash here!
    // kafkaHost: "my-cluster-kafka-bootstrap:9092", //no trailing slash here!
    kafkaHost: "localhost:31286",
    logger: {
      debug: msg => console.log("debug", msg),
      info: msg => console.log("info", msg),
      warn: msg => console.log("warn", msg),
      error: msg => console.log("error", msg)
    },
    // groupId: "testWindow",
    // clientName: "testWindow",
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
      autoCommit: true, //if you set this to false and run with backpressure the consumer will commit on every successfull batch
      autoCommitIntervalMs: 1000,
      requireAcks: 0,
      ackTimeoutMs: 100,
      partitionerType: 3
    }
  };
  producer = new Producer(config, "test", partitions);

  producer.connect().then(_ => {
    console.log("ok producer is ready");
    producerIsReady = true;
  });
  producer.on("error", error => {
    producerIsReady = false;
    console.error("에러", error);
  });

  return producer;
};

const produceFunc = variables => {
  console.log("여기?? 1");
  if (producerIsReady) {
    console.log("여기?? 2");
    producer.bufferFormat(
      "test",
      "key from kafka sinek client",
      variables,
      version,
      compressionType
    );
  } else {
    console.log("what?? producer Is Not Ready??");
  }
};

let count = 0;
producer = kafkaConfig();

app.get("/", (req, res) => res.send("Hello World! producer~~"));
app.get("/producer", (req, res) => {
  console.log("여기?? 0");
  produceFunc({ what: "node producer: " + count });
  console.log("여기?? 3", { what: "node producer: " + count });
  count++;
  return res.send("ok produced to kafka");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

produceFunc("node producer: " + count);
