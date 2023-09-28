const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig');
app.use(express.json());
const cors = require("cors");

//CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));