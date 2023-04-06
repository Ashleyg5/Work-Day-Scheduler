
var saveBtn = document.querySelector(".saveBtn");
const currentTime = dayjs().$H;
var description = document.getElementsByClassName(".description");
const today = dayjs();
$('#currentDay').text(dayjs().format('dddd MMMM D, YYYY'));

$(function () {
  const timeBlock = document.querySelectorAll(".time-block");

  timeBlock.forEach(block => {
    const timeBlockHour = block.getAttribute("id").split("-");

    if (parseInt(timeBlockHour[1]) < currentTime) {
      block.classList.add("past");
    } else if (parseInt(timeBlockHour[1]) > currentTime) {
      block.classList.add("future");
    } else {
      block.classList.add("present");
    }
  });
});

$(document).ready(function () {

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, text);
  })
  
});

window.onload = function loadContent() {

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  

}