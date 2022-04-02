function count_to_Ten() {
  var Digit = "";
  var x = 1;
  while (x < 11) {
    Digit += "<br>" + x;
    x++;
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//Assignment 50
function call_Loop() {
  let text = "";
  let i = 0;
  while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  }
  document.getElementById("Loop").innerHTML = text;
}
//Assignment 51

var Instruments = [
  "Guitar",
  "Drums",
  "Piano",
  "Bass",
  "Violin",
  "Trumpet",
  "Flute",
];
var content = "";
var y;
function for_Loop() {
  for (y = 0; y < Instruments.length; y++) {
    content += Instruments[y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = content;
}
//Assignment 52
function marvel_Movies() {
  var Movie = [];
  marvel_Movies[1] = "Iron_Man";
  marvel_Movies[2] = "Thor";
  marvel_Movies[3] = "Doctor_Strange";
  marvel_Movies[4] = "Deadpool";
  marvel_Movies[5] = "SpiderMan";
  marvel_Movies[6] = "Captain_America";
  document.getElementById("Array").innerHTML =
    "This movie is " + marvel_Movies[2] + ".";
} //Assignment 53
function constant_function() {
  const vehicle = { type: "Car", brand: "Kia", color: "Silver", year: "2022" };
  vehicle.type = "Car";
  vehicle.brand = "Kia";
  vehicle.color = "Silver";
  vehicle.year = "2022";
  document.getElementById("Constant").innerHTML =
    "The " +
    vehicle.type +
    " is a " +
    vehicle.brand +
    " and is " +
    vehicle.color +
    " and the year " +
    vehicle.year;
}
//Assignment 54
function keyword() {
  var x = 10;

  {
    var x = 11;
  }

  document.getElementById("Let").innerHTML = x;
}

//Assignment 55 I can't get this to work and need help! lol

let car = {
  make: "Kia",
  year: "2022",
  color: "silver",
  description: function help() {},
};

document.getElementById("car").innerHTML = "I have a ";
car.year + car.color + car.make;
