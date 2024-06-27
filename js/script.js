AOS.init({ delay: 100, duration: 500 });

//!swiper

// const swiper = new Swiper(".swiper", {

//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
// const swiper2 = new Swiper(".swiper", {

//   slidesPerView: 1,
//   spaceBetween: 10,

//   breakpoints: {

//     583: {
//       slidesPerView: 2,
//     },

//     863: {
//       slidesPerView: 3,
//     },

//     1440: {
//       slidesPerView: 4,
//     },
//   },
// });

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

// let cartIcon = document.querySelector(".cart");

// cartIcon.addEventListener("click", function () {
//   const popup = document.querySelector(".popup");
//   popup.classList.toggle("show");
//   updateCartPopup();
// });

// fetch("solodata.json")
//   .then((response) => response.json())
//   .then((products) => {
//     const productContainer = document.getElementById("SoloProduct-Container");

//     const quantityControls = document.createElement("div");
//     quantityControls.className = "quantitycontrols";

//     const minusBtn = document.createElement("button");
//     minusBtn.className = "minusBtn";
//     minusBtn.textContent = "-";

//     minusBtn.addEventListener("click", function () {
//       minusQuantity(product.id);
//     });

//     quantityControls.appendChild(minusBtn);

//     const quantityInput = document.createElement("input");
//     quantityInput.type = "number";
//     quantityInput.id = `quantity-${product.id}`;
//     quantityInput.value = "1";
//     quantityInput.min = "1";
//     quantityControls.appendChild(quantityInput);

//     const plusBtn = document.createElement("button");
//     plusBtn.textContent = "+";

//     plusBtn.addEventListener("click", function () {
//       plusQuantity(products.id);

//       quantityControls.appendChild(plusBtn);
//       quantityControls.appendChild(minusBtn);

//       const btn = document.createElement("button");
//       btn.textContent = "Add to cart";
//       btn.addEventListener("click", function () {
//         const quantity = parseInt(
//           document.querySelector(`#quantity-${product.id}`).value
//         );
//         addCart({ ...product.quantity });
//       });
//       productContainer.appendChild(btn);
//     });
//   });

// function minusQuantity(productId) {
//   const quantityInput = document.querySelector(`#quantity-${productId}`);
//   quantityInput.value = parseInt(quantityInput.value) - 1;
// }
// function plusQuantity(productId) {
//   const quantityInput = document.querySelector(`#quantity-${productId}`);
//   quantityInput.value = parseInt(quantityInput.value) + 1;
// }

// function addToCart(product){
//   let cart = JSON.parse(localStorage.getItem("cart") || [])

//   const existingProductIndex = cart.findIndex ((p)=> p.id === product.id)

//   if((existingProductIndex)=> 0){
//     cart[existingProductIndex].quantity += product.quantity
//   }else{
//     CacheStorage.push(product)
//   }
//   localStorage.setItem("cart",JSON.stringify(cart))
//   updateCartPopup()
// }