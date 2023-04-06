
const saveBtn = document.querySelector(".saveBtn");
const currentTime = dayjs().$H;

const today = dayjs();
$('#currentDay').text(dayjs().format('MMMM D, YYYY'));

$(function () {

  console.log(dayjs().$H);
  const timeBlock = document.querySelectorAll(".time-block");

  timeBlock.forEach(block => {
    const timeBlockHour = block.getAttribute("id").split("-");
    console.log(timeBlockHour);

    if (parseInt(timeBlockHour[1]) < currentTime) {
      block.classList.add("past");
    } else if (parseInt(timeBlockHour[1]) > currentTime) {
      block.classList.add("future");
    } else {
      block.classList.add("present");
    }
  });


  saveBtn.forEach(btns => {
    btns.addEventListener("click", function (e) {
      e.preventDefault();
      saveUserInput();
    });



  })

  function saveUserInput(){
    
    var description = document.querySelector(".description");
    var text = [];

    

  }






});
