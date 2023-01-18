// shows current time in hedder
const currentDay = document.getElementById("currentDay"); 

var now = document.createTextNode(dayjs().format("dddd, MMMM DD")); 

currentDay.appendChild(now) 

// adds CSS class on time
function addClass(){

// currentTime set to number of hours
var currentTime = dayjs().hour();

// loops for all time blocks
$(".time-blocks").each(function ( ){
    
    var hourBlock = parseInt($(this).attr('id'));
// shows past CSS value
    if(hourBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
// show current css value
    else if(hourBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
// show future Css value
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}

//save local storage on btn press
$(".btn").each(function(index){
$(this).click(function (e) {
    e.preventDefault();
    console.log("save");
    var task = $(this).siblings(".userText").val(); 
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, task); 
    console.log($(this).parent().attr("id"))
    
});
});

// helps style page when loaded
addClass();

// uses saved local storage for text boxs
$("#8 .userText").val(localStorage.getItem("8"))
$("#9 .userText").val(localStorage.getItem("9"))
$("#10 .userText").val(localStorage.getItem("10"))
$("#11 .userText").val(localStorage.getItem("11"))
$("#12 .userText").val(localStorage.getItem("12"))
$("#13 .userText").val(localStorage.getItem("13"))
$("#14 .userText").val(localStorage.getItem("14"))
$("#15 .userText").val(localStorage.getItem("15"))