let taskList = [];
let count = 0;
function addTask() {
  //checking for null input
  let task = document.getElementById("insert__task").value.trim();
  if (task == "") {
    alert("Please enter a valid task");
    return;
  }
  count++;

  let new_task_container = document.createElement("div");
  new_task_container.className = `card__task card__task--${count}`; //<div class = "card__task card__task--1">

  let new_task_radio = document.createElement("input");
  new_task_radio.type = "radio";
  new_task_radio.id = `card__task--${count}`; //<input type="radio" id="card__task--1";>

  let new_task_label = document.createElement("label");
  new_task_label.htmlFor = `card__task--${count}`;
  new_task_label.textContent = task;

  new_task_container.appendChild(new_task_radio);
  new_task_container.appendChild(new_task_label);

  document
    .getElementsByClassName("card__list")[0]
    .appendChild(new_task_container);
  document.getElementById("insert__task").value = "";
  document.getElementsByClassName(
    "card__task__count"
  )[0].innerHTML = `<span style="color: #566ED7ff;">${count}</span> task`;
}
console.log(taskList);
function deleteTask() {
  let checkedTask = document.querySelectorAll(`input[type="radio"]:checked`);
  checkedTask = Array.from(checkedTask);
  console.log(checkedTask);
  let current_size = checkedTask.length;
  for (let i = 0; i < current_size; i++) {
    document.querySelector(`label[for="${checkedTask[i].id}"]`).remove();
    document.getElementsByClassName(checkedTask[i].id)[0].remove();
    document.querySelector(`input#${checkedTask[i].id}`);
    count--;
    document.getElementsByClassName(
      "card__task__count"
    )[0].textContent = `${count} task`;
  }
  checkedTask.length = 0;
}

//text to display date
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
let currentDay = weekday[date.getDay()];
let currentDate = date.getDate();
let currentMonth = month[date.getMonth()];
let today = `${currentDay}, ${currentDate} ${currentMonth}`;
document.getElementsByClassName("card__date")[0].textContent = today;
