const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(()=>{console.log("hereeee")})
app.use(cors({ origin: "http://localhost:3001" }));

app.listen(process.env.PORT, () => { console.log("The server is running") });