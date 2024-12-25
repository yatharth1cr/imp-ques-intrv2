const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const routes = require("./routes");

const app = express();
const PORT = 3000;

// middleware
app.use(bodyParser.json());

// DB connection
connectDB();

// routes
app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
