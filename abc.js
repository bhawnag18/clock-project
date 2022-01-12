setInterval(clockTiming,1000);
  
function clockTiming()
{
  var d=new Date();
  let hour=d.getHours();
  let minute=d.getMinutes();
  let second=d.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 



 
  document.getElementById("hour").innerHTML=hour;
  document.getElementById("minute").innerHTML=minute;
  document.getElementById("second").innerHTML=second;
  document.getElementById("am").innerHTML=prepand;
}



function clickk() {
var date = new Date();
var hours = date.getHours();

let waketime = document.getElementById("wake_time").value;
let lunchtime = document.getElementById("lunch_time").value;
let naptime = document.getElementById("nap_time").value;



if (waketime == hours) {
document.getElementById("food_image").style.backgroundImage =
  "url('breakfast.jpg')";
document.getElementById("food_msg").innerHTML =
  "Let's have some breakfast";
}

if (lunchtime == hours) {
document.getElementById("food_image").style.backgroundImage =
  "url('g.png')";
document.getElementById("food_msg").innerHTML = "Let's have lunch";
}
if (naptime == hours) {
document.getElementById("food_image").style.backgroundImage =
  "url('naptime.jpg')";
document.getElementById("food_msg").innerHTML =
  "Let's have some dinner";
}

clickkk();
}


function clickkk() {
let waketime = document.getElementById("wake_time").value;
let lunchtime = document.getElementById("lunch_time").value;
let naptime = document.getElementById("nap_time").value;

var insideValue1 = document.getElementById("wake_time");
var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

var insideValue2 = document.getElementById("lunch_time");
var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

var insideValue3 = document.getElementById("nap_time");
var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

if (waketime == "none") {
document.getElementById("wake_up").innerHTML = "";
} else {
document.getElementById("wake_up").innerHTML =
  "Wake up time : " + invalue1;
}

if (lunchtime == "none") {
document.getElementById("lunch").innerHTML = "";
} else {
document.getElementById("lunch").innerHTML =
  "Lunch time : " + invalue2;
}

if (naptime == "none") {
document.getElementById("nap").innerHTML = "";
} else {
document.getElementById("nap").innerHTML = "Nap time : " + invalue3;
}
}
