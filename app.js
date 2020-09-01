const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const http= require('http');
const app=express();
app.set("view engine","ejs");
const port=3000;
let newItems= ["freshen up","Taking Breakfast", "attend meeting"];



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  let today=new Date();

  let options={
    weekday: "long",
    day:"numeric",
    month:"long"
  }

  let day = today.toLocaleDateString("en-US",options);

  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //      day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }

  if(day ==="Saturday" || day ==="Sunday")
  {
    var desc="weekend";

  }else{
    var desc="weekdays";
  }
var length;
  res.render("list", {today:day, items:newItems});


});

app.post("/",function(req,res){
  let newItem=req.body.item;
  newItems.push(newItem);
  res.redirect("/");
})



app.listen(port,function(){
  console.log("Execution started at port number 3000!!");
})
