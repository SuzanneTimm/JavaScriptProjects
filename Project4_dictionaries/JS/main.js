function my_Dictionary() {
  var Netflix = {
    Movie: "The Avengers",
    Genre: "Action",
    Actors: "Male",
    Actress: "Female",
    Movie: "Superman" //this will overide The Avengers Challenge 5
  };
  delete Netflix.Genre; //this removed Genre from the Dictionary
  document.getElementById("Dictionary").innerHTML = Netflix.Genre;
}



