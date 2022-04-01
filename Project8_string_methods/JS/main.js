//Assignment 44
function full_sentence() {
  var part_1 = "Guess what day ";
  var part_2 = "it is ";
  var part_3 = "April Fools!";
  //var whole_sentence = part_1.concat(part_2, part_3);
  var whole_sentence = part_1 + part_2 + part_3;
  document.getElementById("StringMethod").innerHTML = whole_sentence;
}
//Assignment 45
function slice_Method() {
  var sentence = " Slice and Dice ";
  var section = sentence.slice(11, 15);
  document.getElementById("Slice").innerHTML = section;
}
//Assignment 46
function string_Method() {
  var myNumber = 999;
  document.getElementById("ToString").innerHTML = myNumber.toString();
}
//Assignment 47
function precision_method() {
  var myNumber = 123.456;
  document.getElementById("SpecificLength").innerHTML =
    myNumber.toPrecision(10);
}
