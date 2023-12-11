const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/social_network_api",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your API routes
app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.end("it works!");
});

// CORS configuration
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
