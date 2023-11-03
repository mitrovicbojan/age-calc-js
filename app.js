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

// let a = moment("2022-12-45");
// console.log(a.isValid());
// console.log(a.invalidAt());

function dateCalc() {
  let input =
    `${yearInput.value}` +
    "-" +
    `${monthInput.value}` +
    "-" +
    `${dayInput.value}`;

  let inputDate = new Date(input);

  let b = moment(input, "YYYY-MM-DD");

  let now = moment(b);
  console.log(now.isValid());
  console.log(now.invalidAt());

  let a = moment();

  let res = a.diff(inputDate, "days");

  if (input == "--") {
    errorDay.style.display = "Block";
    errorMonth.style.display = "Block";
    errorYear.style.display = "Block";
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }

  if (now.invalidAt() == 2) {
    errorDay.style.display = "Block";
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }
  if (monthInput.value > 12) {
    errorMonth.style.display = "Block";
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }

  let yearDiff = res / 365;

  let rsYearDiff = res - Math.floor(yearDiff) * 365;
  let monthDiff = rsYearDiff / 30;
  let dayDiff = rsYearDiff - Math.floor(monthDiff) * 30;

  yearOutput.innerHTML = Math.floor(yearDiff);
  monthOutput.innerHTML = Math.floor(monthDiff);
  dayOutput.innerHTML = dayDiff;
}

// Additionally, you can use moment#invalidAt to determine which date unit overflowed.

// var m = moment("2011-10-10T10:20:90");
// m.isValid(); // false
// m.invalidAt(); // 5 for seconds
// The return value has the following meaning:

// years
// months
// days
// hours
// minutes
// seconds
// milliseconds
