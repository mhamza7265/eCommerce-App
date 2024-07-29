const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDB = require("./config/connectToDB");
const routes = require("./routes/api");
connectToDB();
/*************************************************************************************************************/
const app = express();
app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("files"));
app.use(require("./routes/api"));

app.get("/", async (req, res) => {
  return res.send("HAHAHHA");
});

app.listen("3000", () => console.log("Server started on port 3000"));
