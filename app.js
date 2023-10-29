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

// var a = moment();

// let res = a.diff("2000-05-12");

// console.log(res);

function dateCalc() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  let input =
    `${monthInput.value}` +
    "/" +
    `${dayInput.value}` +
    "/" +
    `${yearInput.value}`;

  let inputDate = new Date(input);

  var a = moment();
  let res = a.duration(inputDate);
  console.log(res);

  let inputYear = inputDate.getFullYear();
  let inputMonth = inputDate.getMonth();
  let inputDay = inputDate.getDate();

  let resultYear = currentYear - inputYear;
  let resultMonth = currentMonth - inputMonth;
  let resultDay = currentDay - inputDay;

  if (inputMonth > 12) {
    monthInput.style.borderColor = "var(--light-red)";
    errorMonth.style.display = "Block";
  }

  if (Number(dayInput.value) > 31) {
    dayInput.style.borderColor = "var(--light-red)";
    errorDay.style.display = "Block";
  }

  if (resultYear < 0) {
    errorYear.style.display = "Block";
    yearInput.style.borderColor = "var(--light-red)";
  } else if (resultMonth > 0) {
    yearOutput.innerHTML = resultYear;
    monthOutput.innerHTML = resultMonth;
  } else {
    resultYear = resultYear - 1;
    if (resultMonth <= 0) monthOutput.innerHTML = resultMonth;
    if (resultDay > 0) resultMonth = 12 + resultMonth;
    else resultMonth = 11 - resultMonth;
    dayOutput.innerHTML = resultDay;
  }
  if (resultDay < 0) {
    resultDay = 30 + resultDay;
    resultMonth -= 1;
    monthOutput.innerHTML = resultMonth;
    dayOutput.innerHTML = resultDay;
  }
}

function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2017-01-01"),
  b = new Date("2017-07-25"),
  difference = dateDiffInDays(a, b);

console.log(difference + " days");
