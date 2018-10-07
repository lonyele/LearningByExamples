const mongoose = require("mongoose");
import { Another } from "./model/another";

export const initMongo = () => {
  mongoose.connect("mongodb://localhost:27017/famoz-wayfindng");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", async function() {
    console.log("mongoose connected db");
  });
  return {
    Another
  };
};
