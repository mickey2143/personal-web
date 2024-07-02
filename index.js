const currentTimeContainer = document.querySelector("#time");
const currentDayContainer = document.querySelector("#day");
const footerContainer = document.querySelector("#footer");

const hour = new Date().getUTCHours();
const minutes = new Date().getUTCMinutes();
const seconds = new Date().getUTCSeconds();
const day = new Date().getDay();
Date.g;
const dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentTimeContainer.innerHTML = `${hour}: ${minutes}:${seconds}`;
currentDayContainer.innerHTML = `${dayOfTheWeek[day]}`;
footerContainer.innerHTML = `Copyright ${new Date().getFullYear()} Michael Ani`;
