const express = require("express");
const app = express();
const port = 6500;

const { Consumer } = require("sinek");

const config = {
  //either one of the following, if you want to connect directly to the broker
  //you should omit the zkConStr field and just provide kafkaHost
  //zkConStr: "localhost:2181/kafka", 여기에다가 하면 자동으로 leader로 가게 해주나?
  // kafkaHost: "http://192.168.65.3:30266", //no trailing slash here!
  kafkaHost: "192.168.65.3:31286",
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

const consumer = new Consumer("test", config); //checkout config below

// without backpressure
const withBackpressure = false;
consumer.connect(withBackpressure).then(_ => {
  console.log("withBackpressure 전");
  consumer.consume(); //resolves a promise on the first message consumed
  console.log("withBackpressure 후");
});

consumer.on("message", message => {
  // console.log("message~~", message.value.toString()); // 이건 걍 쌩 string
  // console.log("message~~1", message.value.toString().payload); // 이건 undefined남
  console.log("message~~2", JSON.parse(message.value.toString())); // 요게 json
});
consumer.on("error", error => console.error("error1~", error));

// with backpressure
// const withBackpressure = true;
// consumer.connect(withBackpressure).then(_ => {
//   consumer.consume((message, callback) => {
//     console.log("withBackpressure message",message);
//     //you must return this callback to receive further messages
//     callback();
//   });
// });

consumer.on("error", error => console.error("error2~~", error));

app.get("/", (req, res) => res.send("Hello World! consumer~~"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
