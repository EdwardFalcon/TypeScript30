var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = "rotate(".concat(secondsDegrees, "deg)");
    var mins = now.getMinutes();
    var minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minHand.style.transform = "rotate(".concat(minsDegrees, "deg)");
    var hours = now.getHours();
    var hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = "rotate(".concat(hoursDegrees, "deg)");
}
setInterval(setDate, 1000);
