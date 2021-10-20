const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

// connect with mongodb
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

// middleware parse json request
app.use(express.json());

require("./app/routes")(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
