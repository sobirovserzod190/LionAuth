//IMPORTING DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//CONFIGURING ENVIRONMENT VARIABLES
dotenv.config();
const app = express();

app.use(cors()); //Add to cors on deployment { origin: "*", methods: "GET,POST,PUT,DELETE,PATCH" }
app.use(express.json());
