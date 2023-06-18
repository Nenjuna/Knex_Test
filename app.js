const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.end.PORT, () => {
  console.log("Server running on port 8000");
});
