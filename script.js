// get element by id 
var menuBar = document.getElementById("menu-burger");
var dropDown = document.getElementById("drop-down");
var mainBody = document.querySelector(".header");
menuBar.addEventListener("click", function(){
  dropDown.classList.toggle("open");
  mainBody.classList.toggle("gray-body");
});



