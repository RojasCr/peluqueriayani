const express = require("express");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(process.cwd() + "/src/public"));





module.exports = app;