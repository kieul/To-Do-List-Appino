let input = document.querySelector(" .add-input");
let addBtn = document.querySelector(" .add-task");
let tasks = document.querySelector(" .task");

// add btn disabled
input.addEventListener("keyup", function () {
  if (input.value.trim().length != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new item to list
addBtn.addEventListener("click", function () {
  if (input.value.trim().length != 0) {
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
        <div class="item">
          <h4> ${input.value} </h4>
          <div class="item-btn">
           <i class="fa-solid fa-square-check"></i>
            <i class="fa-solid fa-square-xmark"></i>
          </div>
        </div>
        `;

    tasks.appendChild(newTask);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

// delete item from list
tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-square-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

// mark item as completed
tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-square-check")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

//display current day and date

/**
 * @param {Date} date
 */
let now = new Date();

let p = document.querySelector("#showDate");
let date = now.getDate();
const nth = function (date) {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let day = days[now.getDay()]; //0 to 6
p.innerHTML = `${day}, ${date}${nth(date)} ${month} `;
