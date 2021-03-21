let nav = document.querySelector(".navigation");
let backtotop = document.querySelector("#backtotop");
let logo = document.querySelector(".logo");
let mobilebutton = document.getElementById("mobilebutton");
let mobmen = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
let mybutton = document.querySelector("#backtotop");

window.onscroll = function () {
  scrollFunction(), toTopFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    nav.classList.add("bg");
    links.forEach((el) => {
      el.style.color = "#0E4B69";
    });
  } else {
    nav.classList.remove("bg");
    links.forEach((el) => {
      el.style.color = "";
    });
  }
}

function toTopFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);

/*Mobile menu*/

const mobMenu = () => {
  mobmen.classList.toggle("responsive");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
};

mobilebutton.addEventListener("click", mobMenu);

/*Typing Function*/

let i = 0;
let txt = "elcome to my Portfolio!";
let speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".banner h2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener("load", typeWriter);
