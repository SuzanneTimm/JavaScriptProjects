//global variable
var x = 10;

function Add_numbers_10() {
  var x = 99;
  document.write(10 + x + "<br>");
}

function Add_numbers_11() {
  document.write(x + 11);
}

Add_numbers_10();
Add_numbers_11();

function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "April Fools!!";
  }
}
//if and else statements
function myIfElse() {
  var input = document.getElementById("myInput").value;
  var paragraph = document.getElementById("myParagraph");
  if (input > 10) {
    paragraph.innerHTML = "You entered a number larger than 10";
  } else {
    paragraph.innerHTML = "You entered something less than or equal to 10";
  }
}

//Assignment 43
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time > 12 == Time < 18) {
    Reply = "It is afternoon!";
  } else {
    Reply = "It is evening time!";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
