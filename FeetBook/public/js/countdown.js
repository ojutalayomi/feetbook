var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Function to update the time
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    const greetingElement = document.querySelector('.greeting');

    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.textContent = greeting;

    // Convert hours from 24-hour to 12-hour format
    //hours = hours % 12;
    // Convert '0' to '12'
    //hours = hours ? hours : 12;

    // Format time as 2-digit numbers
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time
    document.querySelector('.time').textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
}

// Function to update the countdown
function updateCountdown() {
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " day | " + hours + " hours | " + minutes + " minutes | " + seconds + " seconds ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the time and countdown immediately, then update them every second
updateTime();
updateCountdown();
setInterval(updateTime, 1000);
var countdownInterval = setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function () {
    // Get the video element
    var timee = document.querySelector(".time");
    //setTimeout(function(){
        if( timee.innerHTML == "23:59:25 PM" ){
                var video = document.querySelector("video");

                // Set the display property to "block"
                video.style.display = "block";

                // Play the video
                video.play();
    }
    //},5000)
  });