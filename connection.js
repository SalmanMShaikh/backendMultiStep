const { MongoClient } = require("mongodb");
const config = require("./config");
const client = new MongoClient(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error while connecting", err);
  });
const db = client.db("newdatabase");

const formDataCollection = db.collection("formdata");

module.exports = {
  db,
  formDataCollection,
};
