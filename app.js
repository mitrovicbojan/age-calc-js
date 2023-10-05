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
  let currentDate = new Date();
  console.log(currentDate);

  let input =
    `${monthInput.value}` +
    "/" +
    `${dayInput.value}` +
    "/" +
    `${yearInput.value}`;
  console.log(input);
  let inputDate = new Date(input);
  console.log(inputDate);
  let myYear = inputDate.getFullYear();
  let myMonth = inputDate.getMonth();
  console.log(myYear);
  console.log(myMonth);
}
