// JavaScript Document
// Open hamburger menu
var menu = document.querySelector("header button:first-of-type");
var menuSluit = document.querySelector("header nav button");
var logo = document.querySelector("header > a img");
var logosmall = document.querySelector("#necklace header > a:first-of-type img");
var cart = document.querySelector("header a:nth-of-type(2) img, #necklace header a:nth-of-type(2) img");
var insta = document.querySelector("footer ul:first-of-type li:first-of-type img");
var facebook = document.querySelector("footer ul:first-of-type li:nth-of-type(2) img");
var pin = document.querySelector("footer ul:first-of-type li:nth-of-type(3) img");
var twitter = document.querySelector("footer ul:first-of-type li:nth-of-type(4) img");
var hamburger = document.querySelector("header button img");
var close = document.querySelector("header nav button img");

menu.addEventListener("click", openMenu);

function openMenu() {
  var navi = document.querySelector("nav");
  navi.classList.add("toonMenu");
}

// Sluit hamburger menu
menuSluit.addEventListener("click", sluitMenu);

function sluitMenu() {
  var navi = document.querySelector("nav");
  navi.classList.remove("toonMenu");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  logo.src="./images/logo-white.svg"
  // Als logosmall ekement aanwezig is dan wordt dit svg bestand gebruikt
  if (logosmall) {
    logosmall.src="./images/logo-mobile-white.svg"
  }
  cart.src="./images/cart-white.svg"
  insta.src="./images/instagram-white.svg"
  facebook.src="./images/facebook-white.svg"
  pin.src="./images/pinterest-white.svg"
  twitter.src="./images/twitter-white.svg"
  hamburger.src="./images/menu-white.svg"
  close.src="./images/close-white.svg"
} else {
  logo.src="./images/logo-black.svg"
  // Als logosmall ekement aanwezig is dan wordt dit svg bestand gebruikt
  if (logosmall) {
    logosmall.src="./images/logo-mobile.svg"
  }
  cart.src="./images/cart.svg"
  insta.src="./images/instagram.svg"
  facebook.src="./images/facebook.svg"
  pin.src="./images/pinterest.svg"
  twitter.src="./images/twitter.svg"
  hamburger.src="./images/menu.svg"
  close.src="./images/close.svg"
}