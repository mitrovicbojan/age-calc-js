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
  let input =
    `${monthInput.value}` +
    "/" +
    `${dayInput.value}` +
    "/" +
    `${yearInput.value}`;

  let inputDate = new Date(input);

  var a = moment();
  let res = a.diff(inputDate, "days");

  let yearDiff = res / 365;

  let rsYearDiff = res - Math.floor(yearDiff) * 365;
  let monthDiff = rsYearDiff / 30;
  let dayDiff = rsYearDiff - Math.floor(monthDiff) * 30;

  yearOutput.innerHTML = Math.floor(yearDiff);
  monthOutput.innerHTML = Math.floor(monthDiff);
  dayOutput.innerHTML = dayDiff;
}
