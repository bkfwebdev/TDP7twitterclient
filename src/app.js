 "use strict";
 // intialize variables and node modules
const express = require("express");
const pug = require("pug");
const twit = require("twit");
const config = require("../config");
var myApp = new express();
var myContent = {
  myTweets:[],
  myFollowers:[],
  myMessages:[]
}
const myhttps = require("https");
const timeLineTarget = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=bkfwebdev&count=5";
const followersTarget = "https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=bkfwebdev&skip_status=true&include_user_entities=false";
const messagesTarget = "https://api.twitter.com/1.1/direct_messages.json?count=5";
var myTwit = new twit(config); 
var myStream = myTwit.stream("bkfwebdev");
myApp.use(express.static(__dirname + '/public'));
//---------------------------------------------------------------------
// Main program logic
 var templateTestObject = {tweets:["this is a test of the emergency broadcast system", 
                                    "You know what's more important than throwing money at the strip club?, credit",
                                    "I think my mind's playing tricks on me...",
                                    "Wu Tang Clan , Wu Tang Clan and Iron Man...",
                                    "Easily I approach, the microphone because I aint no joke...",
                                    "background-image:url(https://pbs.twimg.com/profile_images/856254755760373765/7HCLCibc_400x400.jpg)"
 ]
}

 myTwit.get(timeLineTarget,function(req,res){
    console.log("inside twit get call ");
    console.dir(res); 
    for(var x=0; x<=4; x++){
      myContent.myTweets[x] = res[x].text;
      console.log(myContent.myTweets[x]);
    }
 });


/* var getSomeFollowers = function (dataTarget,dataObject){   
  dataObject = myTwit.get(dataTarget,function(req,res){
    console.log("inside twit get call "+ dataTarget);
    console.dir(res); 
    dataObject = res;
  });
}

var getSomeMessages = function (dataTarget,dataObject){
  dataObject = myTwit.get(dataTarget,function(req,res){
    console.log("inside twit get call "+ dataTarget);
    console.dir(res); 
    dataObject = res;
  });
}



function ornithologist(){
  
  console.log("you just tweeted ");
  
}

myStream.on("tweet",ornithologist);

myContent.myFollowers = getSomeData(followersTarget,myContent.myFollowers);
console.dir(myContent.myFollowers)
myContent.myMessages = getSomeData(messagesTarget,myContent.myMessages);
console.dir(myContent.myMessages);
myContent.myTimeline = getSomeData(timeLineTarget,myContent.myTimeline);
console.dir(myContent.myTimeline);
*/

myApp.listen(3000, function (){
console.log('front-end app listening on port 3000!');
});
myApp.set("view engine", "pug");
myApp.set("views", __dirname + "/views"); 
myApp.get("/",function(req,res){
  res.render("testindex",myContent);
})
 





