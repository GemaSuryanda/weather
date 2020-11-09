const express = require('express');
//const bodyParser = require("body-parser");
const app = express();
const router = require("./router");
//app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "hbs");

app.use("/", router);

app.listen(3000, () => {
  console.log("Running on port 3000")
});
