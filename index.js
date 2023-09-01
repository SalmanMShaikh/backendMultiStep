const http = require("http");
const express = require("express");
const cors = require("cors");
const config = require('./config')
const router = require("./routes/route");



const app = express();

const port = config.port

const server = http.createServer(app);

app.use(cors());

app.use(express.json());

app.use("/", router)
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  