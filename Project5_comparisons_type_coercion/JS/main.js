document.write(typeof "Movie");
document.write("<br>");
document.write(typeof 10);
document.write("<br>");
document.write(typeof 1.5e4);
document.write("<br>");
document.write(typeof { a: 1 });
document.write("<br>");
document.write(typeof true); //Boolean
document.write("<br>");
document.write(typeof NaN);
document.write("<br>");
document.write(typeof Infinity);
document.write("<br>");
document.write(2e100); //infinity
document.write("<br>");
document.write(-2e100); //negative infinity
document.write("<br>");
document.write(10 > 2); //Boolean logic
document.write("<br>");
document.write(10 < 2);
document.write("<br>");
console.log(10 + 10); //console log 20
document.write("<br>");
document.write("10" + 10); //type coercion
document.write("<br>");
document.write(5 == 5); //true
document.write("<br>");
document.write(5 == 13); //false
document.write("<br>");
x = 1;
y = 1;
document.write(x === y); //true
document.write("<br>");
x = 1;
y = "1";
document.write(x === y); //false
document.write("<br>");
x = 1;
y = 2;
document.write(x === y); //false
document.write("<br>");
x = 1;
y = "2";
document.write(x === y); //false
document.write("<br>");
document.write(10 > 5 && 11 > 6); //true
document.write("<br>");
document.write(10 > 5 && 11 > 6); //false
document.write("<br>");
document.write(10 > 5 || 11 > 6); //true
document.write("<br>");
document.write(10 < 5 || 11 < 6); //false
document.write("<br>");
function not_Function() {
  document.getElementById("Not").innerHTML = !(1 > 2); //Not Operator
}
function not_Function2() {
  document.getElementById("Not2").innerHTML = !(1 < 2); //Not function
}
