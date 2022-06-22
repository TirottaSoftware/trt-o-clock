const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const watchRoutes = require("./routes/watchRoutes");
app.use("/watches", watchRoutes);

app.listen(6969, () => {
  console.log("Server running on port 6969");
});
