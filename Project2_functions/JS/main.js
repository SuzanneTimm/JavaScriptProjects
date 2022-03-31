// Replace the Red Text element
function My_Outdoor_Garden() {                                     
    var str = "Fruits and Vegetables";
    var result= str.fontcolor ("red");
    document.getElementById("Red_Text").innerHTML = result;

}

// This is the concatenated string and use of += operator
function My_Concatenation() {                                     
    var sentence = "Welcome to my Garden ";
    sentence += "and I hope you enjoy your stay!";
    document.getElementById("Replace_Me").innerHTML = sentence;
}
