const express = require("express");
const router = require("./routes");
const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();
app.use(express.json());
app.use(router);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
