const { spawn } = require("child_process");
const child1 = spawn("node", ["test1.js"]);
const child2 = spawn("node", ["test2.js"]);
const child3 = spawn("node", ["test3.js"]);

child1.stdout.on("data", data => {
  console.log(data.toString());
});

child1.stderr.on("data", data => {
  console.log(data.toString());
});

child1.on("exit", code => {
  console.log(`Child exited with code ${code}`);
});

child2.stdout.on("data", data => {
  console.log(data.toString());
});

child2.stderr.on("data", data => {
  console.log(data.toString());
});

child2.on("exit", code => {
  console.log(`Child exited with code ${code}`);
});

child3.stdout.on("data", data => {
  console.log(data.toString());
});

child3.stderr.on("data", data => {
  console.log(data.toString());
});

child3.on("exit", code => {
  console.log(`Child exited with code ${code}`);
});
