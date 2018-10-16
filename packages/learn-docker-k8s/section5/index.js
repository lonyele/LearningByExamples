const express = require("express");
const app = express();
const port = 5000;
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});
client.set("my-visit", 0);

app.get("/", (req, res) => {
  client.get("my-visit", (err, myVisit) => {
    res.send("Docker node~~~~~~  my visit count: " + myVisit);
    client.set("my-visit", parseInt(myVisit) + 1);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
