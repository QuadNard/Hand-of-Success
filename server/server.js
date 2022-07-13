const express = require("express");
const cors = require("cors"); 


const app = express();

app.get("/", (req, res) => {
  res.send("Express is here");  
});

app.listen(3001, function (){
    console.log("Server is running");
}); 

