var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!  5570 port!!!");
});

app.listen(5570, function() {
  console.log("Example app listening on 5570 port!!!");
});
