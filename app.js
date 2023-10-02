const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let yearOutput = document.getElementById("year-span");
let monthOutput = document.getElementById("month-span");
let dayOutput = document.getElementById("day-span");

errorDay.style.display = "None";
errorMonth.style.display = "None";
errorYear.style.display = "None";

function dateCalc() {
  let newDay = dayInput.value;
  dayOutput.innerHTML = newDay;
}
