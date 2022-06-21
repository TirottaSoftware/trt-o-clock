const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(6969, () => {
  console.log("Server running on port 6969");
});