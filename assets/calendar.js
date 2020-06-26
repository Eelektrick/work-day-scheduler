//set up document.redy to make sure the html loads before the script
$(document).ready(function(){
    // operate the entire webpage
    operateTime();

    //function that stores all functions to operate sheduler and time
    function operateTime(){
        currentDate();
        hourFocus();
        saveBtn();
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
            console.log($(".workHr").eq(i).data("hour"));

            if ($(".workHr").eq(i).data("hour") < currentHour) {
                ($(".input-cell").eq(i).css("background-color", "grey"));
                ($(".input-area").eq(i).css("background-color", "lightgrey"));
            }
            else if ($(".workHr").eq(i).data("hour") === currentHour) {
                ($(".input-cell").eq(i).css("background-color", "mediumblue"));
                ($(".input-area").eq(i).css("background-color", "lightgrey"));
            }
            else {
                ($(".input-cell").eq(i).css("background-color", "green"));
                ($(".input-area").eq(i).css("background-color", "lightgrey"));
            }
        }
    }

    // click save button to save information in local
    function saveBtn(){

        //$(".save-button").on("click", function(event){
        $(document).on("click", ".save-button-cell", function(event) {
            event.preventDefault();
            //If there is any value within the given text area
            var info = $(this).siblings(".input-cell").children(".input-area").val();
            var hour = $(this).siblings(".workHr").data("hour");
            //And place it within the given box and store in local storage.
            console.log(hour, info);
            localStorage.setItem(hour, info);
        });

    }

    //get the saved items in local storage and show it on page load
    for (i = 0; i < 9; i++) {
        var hour = $(".workHr").eq(i).data("hour");
        var information = localStorage.getItem(hour);
        //Will only update the dom if there is a value in localStorage
        if (information){
         $("textarea").eq(i).text(information);
        }
    }
    (hourFocus,1000);
});