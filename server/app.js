const express = require("express");
const routes = require("./routes");

const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

// create the Express app
const app = express();

// Setup request body JSON parsing.
app.use(express.json());

// Enable all CORS Requests
app.use(cors());

app.use(express.static(path.join(__dirname, "/build")));
app.use(cookieParser());

// Add routes.
app.use("/api", routes);

app.get("/", async (req, res) => {
  res.json("Hi there");
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build"))
);

// set our port
app.set("port", process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
