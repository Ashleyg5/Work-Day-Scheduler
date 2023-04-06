# Work-Day-Scheduler

## User Story
``
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively``

## Acceptance Criteria
``
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist``

## Description
 
This is challenge 5 of the bootcamp. I took given HTML, CSS, and JavaScript and altered it to meet the requirements. Using jQuery, I was able to link the current time with the hours on the work day scheduler. As the hours go by, user will see the background colors change on each hour row. Past events are grayed out, present events are red, and future events are green. User will see the current date displayed at the top of the page to help plan out the day. As user inputs a task in the corresponding hour space and clicks the save button, that task will be saved to the local storage until removed. The task will display on the page, even when user exits page and returns. This was made functional using jQuery and local storage properties. 

## Usage
[Work-Day-Scheduler](https://ashleyg5.github.io/Work-Day-Scheduler/)
 
![Work-Day-Scheduler-Img](https://user-images.githubusercontent.com/118938942/230435927-ca012377-1980-41c1-ae84-2eb5ec4b49d2.png)



## Credits

[Resource 1](https://day.js.org/docs/en/display/format)

[Resource 2](https://stackoverflow.com/questions/44564795/how-to-keep-localstorage-values-after-refresh)

[Resource 3](https://learn.jquery.com/using-jquery-core/document-ready/)

[Resource 4](https://www.w3schools.com/jsref/dom_obj_document.asp)

My classmates, instructor, and TA's.

## License

MIT
