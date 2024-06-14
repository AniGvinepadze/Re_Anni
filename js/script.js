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

setInterval(function (elemnt) {
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

  daysP.textContent =  days
  HoursP.textContent = hours
  MinutesP.textContent = minutes
  SecondsP.textContent = seconds
},1000);

