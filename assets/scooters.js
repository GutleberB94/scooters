
let birdScooters = 0;
let uberScooters = 0;
let limeScooters = 0;
let lyftScooters = 0;
let gotchaScooters = 0;
let spinScooters = 0;
var totalScooters = 0;


// ajax call for bird scooters
$.ajax({
    url: "https://data.nashville.gov/resource/nar3-8j89.json",
    type: "GET",
    data: {
      //"$$app_token" : "YOURAPPTOKENHERE"
    }
}).then(function(data) {
  
  birdScooters = data.length
  console.log(birdScooters)
  let li = $("<li>")
  li.text("Bird Scooters: " + birdScooters)
  $(".scootersByCompany").append(li);

  totalScooters+= birdScooters;

});

// ajax call for uber scooters
$.ajax({
  url: "https://data.nashville.gov/resource/jwwr-v4rf.json",
  type: "GET",
  data: {
    //"$$app_token" : "YOURAPPTOKENHERE"
  }
}).then(function(data) {

  uberScooters = data.length;
  let li = $("<li>")
  li.text("Uber Scooters: " + uberScooters)
  $(".scootersByCompany").prepend(li);

  totalScooters+= uberScooters;

});

// ajax call for Lime scooters
$.ajax({
  url: "https://data.nashville.gov/resource/ntar-zcjt.json",
  type: "GET",
  data: {
    //"$$app_token" : "YOURAPPTOKENHERE"
  }
}).then(function(data) {

limeScooters = data.length;

let li = $("<li>")
li.text("Lime Scooters: " + limeScooters)
$(".scootersByCompany").prepend(li);

totalScooters+= limeScooters;

});

// ajax call for LYFT scooters
$.ajax({
  url: "https://data.nashville.gov/resource/bmb2-fucd.json",
  type: "GET",
  data: {
    //"$$app_token" : "YOURAPPTOKENHERE"
  }
}).then(function(data) {

lyftScooters = data.length

let li = $("<li>")
li.text("LYFT Scooters: " + lyftScooters)
$(".scootersByCompany").prepend(li);

totalScooters+= lyftScooters;

});

// ajax call for GOTCHA scooters
$.ajax({
  url: "https://data.nashville.gov/resource/anqi-zsnc.json",
  type: "GET",
  data: {
    //"$$app_token" : "YOURAPPTOKENHERE"
  }
}).then(function(data) {

gotchaScooters = data.length

let li = $("<li>")
li.text("GOTCHA Scooters: " + gotchaScooters)
$(".scootersByCompany").prepend(li);

totalScooters+= gotchaScooters;

});

// ajax call for SPIN scooters
$.ajax({
  url: "https://data.nashville.gov/resource/2gne-qgxz.json",
  type: "GET",
  data: {
    //"$$app_token" : "YOURAPPTOKENHERE"
  }
}).then(function(data) {

spinScooters = data.length

let li = $("<li>")
li.text("Spin Scooters: " + spinScooters)
$(".scootersByCompany").prepend(li);

totalScooters+= spinScooters;

}).then(function(data) {

$(".totalScooters").text("Total Scooters: " + totalScooters);
});



