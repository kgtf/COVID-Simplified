function myFunction() {
  var x = document.getElementById("TopNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
