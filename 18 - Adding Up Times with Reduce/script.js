var timeNodes = document.querySelectorAll('[data-time]');
var seconds = Array.from(timeNodes)
    .map(function (node) { return node.dataset.time; })
    .map(function (timeCode) {
    var _a = timeCode.split(':').map(parseFloat), mins = _a[0], secs = _a[1];
    return mins * 60 + secs;
})
    .reduce(function (total, vidSeconds) { return total + vidSeconds; });
var secondsLeft = seconds;
var hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
var mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft);
