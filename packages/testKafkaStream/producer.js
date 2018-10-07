const {Producer} = require("sinek");
const partitions = 1; //make sure the topic exists and has the given amount of partitions (relates to kafka broker config setup)
const config = {
  
      //either one of the following, if you want to connect directly to the broker
      //you should omit the zkConStr field and just provide kafkaHost
      //zkConStr: "localhost:2181/kafka", 여기에다가 하면 자동으로 leader로 가게 해주나?
      kafkaHost: "localhost:9093", //no trailing slash here!
  
      logger: {
          debug: msg => console.log(msg),
          info: msg => console.log(msg),
          warn: msg => console.log(msg),
          error: msg => console.log(msg)
      },
      groupId: "test-group",
      clientName: "an-unimportant-name",
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
const producer = new Producer(config, ["my-topic"], partitions);
console.log("asfa???");
producer.connect().then(_ => {
  //all 3 return promises (buffer wont actually buffer, they will all be sent immediatly per default)
  console.log("whatt he???? producer send!!!");
  producer.send("my-topic", "my message as string"); //messages will be automatically spread across partitions randomly

  const compressionType = 0;
  producer.buffer("my-topic", "my-message-key-identifier", {bla: "message as object", blah: "I think I will use this format. json"}, compressionType);
  //this will create a keyed-message (e.g. Kafka LogCompaction on Message-Keys), producer will automatically identfiy
  //the message-key to a topic partition (idempotent)

  //if you do not pass in an identifier, it will be created as uuid.v4()

  const version = 1;
  producer.bufferFormat("my-topic", "my-message-key-identifier", {bla: "message as object", hmm:"hmmmmm"}, version, compressionType);
  /* same as .buffer(..) but with the fact that it wraps your message in a certain "standard" message json format e.g.:

  {
      payload: {bla: "message as object"},
      key: "my-message-key-identifier",
      id: "my-message-key-identifier",
      time: "2017-05-29T11:58:15.139Z",
      type: "my-topic-published"
  }
  */

  //using these methods you can control the create, update and delete messages via message.value.type description
  //its an easy schema that helps you to keep a simple design pattern for all of your kafka topics
  producer.bufferFormatPublish("my-topic", "my-message-key-identifier", {bla: "message as object publish"}, version, compressionType);
  producer.bufferFormatUpdate("my-topic", "my-message-key-identifier", {bla: "message as object update"}, version, compressionType);
  producer.bufferFormatUnpublish("my-topic", "my-message-key-identifier", {bla: "message as object unpublish"}, version, compressionType);

  //besides setting keys (message identifiers) you can also set a key to that will make a distinct decision for the
  //partition that is produced to (identifiers and partition keys) have to be strings (partitionKey is an optional parameter)
  const distinctPartitionKeyValue = "my-distinct-partition-key-value";
  producer.bufferFormatUpdate("my-topic", "my-message-key-identifier", {bla: "message as object distinctpartitionkeyvalue"}, version, compressionType, distinctPartitionKeyValue);
  //if the partition key is not provided or null, the producer will use the identifier to determine a kafka partition
});

producer.on("error", error => console.error(error));