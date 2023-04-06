
var saveBtn = document.querySelector(".saveBtn");
const currentTime = dayjs().$H; //sets the current time for the timeblock function
var description = document.getElementsByClassName(".description");
const today = dayjs(); //displays the date on the header of the page
$('#currentDay').text(dayjs().format('dddd MMMM D, YYYY'));

$(function () {//function for the timeblock, adds relevent class for "past present future" according to the current time 
  const timeBlock = document.querySelectorAll(".time-block");

  timeBlock.forEach(block => {//this "for each" creates a block from timeblock and grabs the id and splits them at the hyphen
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

  $(".saveBtn").on("click", function (event) {//.ready function for the save button event for click
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, text);//sets above declared var to the local storage
  })
  
});

window.onload = function loadContent() {//window onload function of load content grabs the values in each specific id and displays them on the page 

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  

}