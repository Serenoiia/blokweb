// JavaScript Document
console.log("hi");




// Open hamburger menu
var menu = document.querySelector("header button:first-of-type");

menu.addEventListener("click", openMenu);

function openMenu() {
  var navi = document.querySelector("nav");
  navi.classList.add("toonMenu");
}




// Sluit hamburger menu
var menuSluit = document.querySelector("header nav button");

menuSluit.addEventListener("click", sluitMenu);

function sluitMenu() {
  var navi = document.querySelector("nav");
  navi.classList.remove("toonMenu");
}