//set up document.redy to make sure the html loads before the script
$(document).ready(function(){
    // operate the entire webpage
    operateTime();

    //function that stores all functions to operate sheduler and time
    function operateTime(){
        currentDate();
        hourFocus();
    }

    // call moment.js to set up current date in day of week, month, day of month
    function currentDate(){
        var todayDate = moment().format("dddd, MMMM Do")

        $("#currentDay").html(todayDate);
    }

    //change colors of textareas
    function hourFocus(){
        //get current hour of day from moment.js
        var currentHour = moment().hours();

        //use for loop to collect data of each row and compare to currenthour what color each textarea will be
        for(i=0; i<9; i++){
            console.log(moment().hours());
            console.log($(".workHr").eq(i).data("hour"))
            if ($(".workHr").eq(i).data("hour") < currentHour) {
                ($(".input-cell").eq(i).css("background-color", "grey"));
            }
            else if ($(".workHr").eq(i).data("hour") === currentHour) {
                ($(".input-cell").eq(i).css("background-color", "mediumblue"));
            }
            else {
                ($(".input-cell").eq(i).css("background-color", "green"));
            }
        }
    }
    (hourFocus,1000);
});