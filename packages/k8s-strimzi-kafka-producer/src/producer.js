const async = require("async");
const { Producer } = require("sinek");

let producer;
let producerIsReady = false;
const compressionType = 0;
const version = 1;

export const kafkaConfig = () => {
  const partitions = 1; //make sure the topic exists and has the given amount of partitions (relates to kafka broker config setup)
  const config = {
    //either one of the following, if you want to connect directly to the broker
    //you should omit the zkConStr field and just provide kafkaHost
    //zkConStr: "localhost:2181/kafka", 여기에다가 하면 자동으로 leader로 가게 해주나?
    kafkaHost: "localhost:9092", //no trailing slash here!

    logger: {
      debug: msg => console.log(msg),
      info: msg => console.log(msg),
      warn: msg => console.log(msg),
      error: msg => console.log(msg)
    },
    groupId: "testWindow",
    clientName: "testWindow",
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
  producer = new Producer(config, ["test-node-producer-1"], partitions);

  producer.connect().then(_ => {
    console.log("ok producer is ready");
    producerIsReady = true;
  });
  producer.on("error", error => {
    producerIsReady = false;
    console.error(error);
  });
};

export const produceFunc = variables => {
  if (producerIsReady) {
    producer.bufferFormat(
      "test-node-producer-1",
      "key from kafka sinek client",
      variables,
      version,
      compressionType
    );
  } else {
    console.log("what?? producer Is Not Ready??");
  }
};
