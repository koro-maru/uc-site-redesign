// Get the container element
var btnContainer = document.getElementById("btnsDIV");

// Get all buttons with class="btnDays" inside the container
var btnsDIV = btnContainer.getElementsByClassName("btndays");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btnsDIV[i].addEventListener("click", function() {

    var current = document.getElementsByClassName("days");

    current[0].className = current[0].className.replace("days", "");
    this.className += "days";
  });
}
