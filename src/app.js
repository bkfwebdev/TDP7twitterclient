 "use strict";
 // intialize variables and node modules
const express = require("express");
const pug = require("pug");
const twit = require("twit");
// const config = require("./config");
var myApp = new express();
var myContent = {
  myTimeline : [],
  myFollowers : [],
  myMessages : []
}
const myhttps = require("https");
const timeLineTarget = "timelineapi";
const followersTarget = "followersapi";
const messagesTarget = "messagesapi";
// var myTwit = new twit(config); 
var timeLineData = "data did not pass";
myApp.use(express.static(__dirname + '/public'));
// var myPug = new pug();

//---------------------------------------------------------------------
// Main program logic

// get timeline and update
// console.log("you should see a data dump before the server launches...");
var templateObject = {tweet1:"this is a test of the emergency broadcast system", 
                    tweet2:"You know what's more important than throwing money at the strip club?, credit",
                    tweet3:"I think my mind's playing tricks on me...",
                    tweet4:"Wu Tang Clan , Wu Tang Clan and Iron Man...",
                    tweet5:"Easily I approach, the microphone because I aint no joke...",
                    background: "url(https://pbs.twimg.com/profile_images/856254755760373765/7HCLCibc_400x400.jpg)"
}

//var myStyleObject = {background-image: "url(https://pbs.twimg.com/profile_images/856254755760373765/7HCLCibc_400x400.jpg)"}

var getSomeData = function (dataTarget){
let someData = null;
myTwit.get(dataTarget, function(req,res){
  return res;

});
return someData;
}

// timeLineData = getSomeData(timeLineTarget);

// console.dir(timeLineData);

myApp.listen(3000, function (){
console.log('front-end app listening on port 3000!');
});
myApp.set("view engine", "pug");
myApp.set("views", __dirname + "/views"); 
myApp.get("/",function(req,res){
  res.render("testindex",templateObject);
})
 



 
/*
myApp.get("/",function(req,res){
  res.render("index");
})

get followers and update
myApp.get("/",function(req,res){
  res.render("index");
})

get messages and update
myApp.get("/",function(req,res){
  res.render("index");
})
followers - > https://dev.twitter.com/rest/reference/get/followers/list
direct messages - > https://dev.twitter.com/rest/reference/get/direct_messages
timeline - > https://dev.twitter.com/rest/reference/get/statuses/user_timeline



*/

