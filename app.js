const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let yearOutput = document.getElementById("year-span");
let monthOutput = document.getElementById("month-span");
let dayOutput = document.getElementById("day-span");
const errorInputs = document.querySelectorAll("input");
const errorlabels = document.querySelectorAll("label");
errorDay.style.display = "None";
errorMonth.style.display = "None";
errorYear.style.display = "None";

function handleError() {
  errorInputs.forEach((element) => {
    element.classList.add("errors");
  });
  errorlabels.forEach((element) => {
    element.classList.add("labelError");
  });
}

function dateCalc() {
  let input =
    `${yearInput.value}` +
    "-" +
    `${monthInput.value}` +
    "-" +
    `${dayInput.value}`;

  let inputDate = new Date(input);
  let currentYear = new Date();

  let b = moment(input, "YYYY-MM-DD");

  let now = moment(b);

  let a = moment();

  let res = a.diff(inputDate, "days");

  if (input == "--") {
    errorDay.style.display = "Block";
    errorMonth.style.display = "Block";
    errorYear.style.display = "Block";
    handleError();
  } else if (
    (now.invalidAt() == 1) &
    (Number(monthInput.value) > 12) &
    (currentYear.getFullYear() < inputDate.getFullYear())
  ) {
    errorDay.style.display = "Block";
    errorMonth.style.display = "Block";
    errorYear.style.display = "Block";
    handleError();
  } else if ((now.invalidAt() == 1) & (Number(monthInput.value) > 12)) {
    errorDay.style.display = "Block";
    errorMonth.style.display = "Block";
    handleError();
  } else if (now.invalidAt() == 2) {
    errorDay.style.display = "Block";
    handleError();
  } else if (currentYear.getFullYear() < inputDate.getFullYear()) {
    errorYear.style.display = "Block";
    handleError();
  } else {
    let yearDiff = res / 365;

    let rsYearDiff = res - Math.floor(yearDiff) * 365;
    let monthDiff = rsYearDiff / 30;
    let dayDiff = rsYearDiff - Math.floor(monthDiff) * 30;

    yearOutput.innerHTML = Math.floor(yearDiff);
    monthOutput.innerHTML = Math.floor(monthDiff);
    dayOutput.innerHTML = dayDiff;
  }
}
