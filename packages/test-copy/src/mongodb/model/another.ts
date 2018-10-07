const mongoose = require("mongoose");
const anotherSchema = mongoose.Schema({
  another: String,
  what: String
});
export const Another = mongoose.model("Another", anotherSchema);

const test = new Another({
  another: "asdfasdff",
  what: "ssssssss"
});

const test1 = new Another({
  another: "test22222",
  what: "2222222"
});

test.save((err: any, test: any) => {
  console.log("inside", test);
});
test1.save((err: any, test: any) => {
  console.log("inside", test1);
});

Another.find(function(err: any, hacker: any) {
  if (err) return console.error(err);
  console.log(hacker);
});
