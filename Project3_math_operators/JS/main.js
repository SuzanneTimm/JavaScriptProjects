
//These functions use operators
function subtraction_Function() {
  var subtraction = 10 - 5;
  document.getElementById("math").innerHTML = "10 - 5 = " + subtraction;
}

function multiplication() {
  var math = 10 * 10;
  document.getElementById("multi").innerHTML = "10 * 10 =" + math;
}

function division() {
  var divide = 10 / 2;
  document.getElementById("divide").innerHTML = "10 / 2 = " + divide;
}

function operation() {
  var all = (1 * 2) / 3 + 4 - 5;
  document.getElementById("all").innerHTML =
    "one multiplied by 2 then divide by 3 add 4 then subtract 5 =" + all;
}

function modulus_Operation() {
  var mod = 100 % 9;
  document.getElementById("modulus").innerHTML =
    "When you divide 100 by 9 you have a remainder of:" + mod;
}

function negation() {
  var X = 100;
  document.getElementById("unary").innerHTML = -100;
}
//Increment and decrement operators
function increment() {
  var s = 100;
  s++;
  document.write(s);
}

function decrement() {
  var t = 100;
  t--;
  document.write(t);
}
//Math Random function
function random1() {
  window.alert(Math.random());
}

function random2() {
  window.alert(Math.random() * 100);
}
//Math Method
function mathround() {
  document.getElementById("demo").innerHTML = Math.round(5.5);
}
