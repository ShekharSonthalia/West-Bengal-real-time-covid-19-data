//jshint esversion : 8
const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("listenibg on http://localhost:4000");
});
