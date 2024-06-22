AOS.init({ delay: 100, duration: 500 });

//!Timer Section

//ვიძახებ დივებს

const timerDays = document.getElementsByClassName("Timer-Content-Days");
const timerHours = document.getElementsByClassName("Timer-Content-Hours");
const timerMinutes = document.getElementsByClassName("Timer-Content-Minutes");
const timerSeconds = document.getElementsByClassName("Timer-Content-Seconds");

//ვიძახებ პარაგრაფებს

const daysP = document.getElementById("Days-P");
const HoursP = document.getElementById("Hours-P");
const MinutesP = document.getElementById("Minutes-P");
const SecondsP = document.getElementById("Seconds-P");

let days = 25;
let hours = 23;
let minutes = 59;
let seconds = 60;

setInterval(function () {
  seconds = seconds - 1;

  if (seconds < 0) {
    seconds = 59;
    minutes = minutes - 1;
  }
  if (minutes < 0) {
    minutes = 59;
    hours = hours - 1;
  }
  if (hours < 0) {
    hours = 23;
    days = days - 1;
  }

  if (days < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  daysP.textContent = days;
  HoursP.textContent = hours;
  MinutesP.textContent = minutes;
  SecondsP.textContent = seconds;
}, 1000);

//! burger menu

let menuBtn = document.querySelector(".menubtn");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
});

let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let body = document.body;

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("noScroll");
});
overlay.addEventListener("click", function () {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("noScroll");
});

//!


// const firstProductContainer = document.getElementById("First-Product-Container");
// const prevBtn = document.getElementById("Previous-Btn");
// const nextBtn = document.getElementById("Next-Btn");

// let currentPage = 1;
// let limit = 2;
// let products = [];

// fetch("js/data.js")
//   .then((response) => response.json())
//   .then((data) => {
//     products = data;
//     showProducts();
//   });

// function showProducts() {
//   firstProductContainer.innerHTML = "";

//   const start = (currentPage - 1) * limit;
//   const end = start + limit;
//   const productShowing = products.slice(start, end);

//   productShowing.forEach((product) => {

//     const productContent = document.createElement("div");
//     productContent.classList.add("product-content");

//     const imgContainer = document.createElement("div");
//     imgContainer.classList.add("product-img");
//     const productImg = document.createElement("img");
//     productImg.src = product.img;
//     imgContainer.appendChild(productImg);
//     productContent.appendChild(imgContainer);

//     const contentContainer = document.createElement("div");
//     contentContainer.classList.add("product-details");

//     const newProduct = document.createElement("p");
//     newProduct.textContent = products.type;
//     contentContainer.appendChild(newProduct);

//     const productName = document.createElement("h2");
//     productName.textContent = products.name;
//     contentContainer.appendChild(productName);

//     const productDescription = document.createElement("span");
//     productDescription.textContent = products.description;
//     contentContainer.appendChild(productDescription);

//     const productBtn = document.createElement("button");
//     productBtn.textContent = "SEE PRODUCT";
//     productBtn.addEventListener("click", function() {
//       viewMore(product.id);
//     });
//     contentContainer.appendChild(productBtn);

//     productContent.appendChild(contentContainer);
//     firstProductContainer.appendChild(productContent);
//   });
// }

// function viewMore(productId) {
//   window.location.href = `product.html?id=${productId}`;
// }

// prevBtn.addEventListener("click", function() {
//   if (currentPage > 1) {
//     currentPage--;
//     showProducts();
//   }
// });

// nextBtn.addEventListener("click", function() {
//   if (currentPage < Math.ceil(products.length / limit)) {
//     currentPage++;
//     showProducts();
//   }
// });
