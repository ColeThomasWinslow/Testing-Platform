const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const testRoute = require("./routes/test");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080; // Step 1
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
mongoose.connection.on("connected", () => {
  //
  console.log("Mongoose is connected!!!!");
});
app.use("/api/auth", authRoute);
app.use("/api/tests", testRoute);
app.use(morgan("tiny"));

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
