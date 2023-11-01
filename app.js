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
  console.log(inputDate);
  let fullYear = new Date();
  let a = moment();
  let b = moment(inputDate).format("YYYY-MM-DD");
  console.log(b);
  let validDate = b.invalidAt();

  console.log(validDate);
  if (validDate == -2) {
    errorDay.style.display = "Block";
  } else if (monthInput.value > 12) {
    errorMonth.style.display = "Block";
  } else if (yearInput.value > fullYear.getFullYear()) {
    errorYear.style.display = "Block";
  }

  let res = a.diff(inputDate, "days");

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
