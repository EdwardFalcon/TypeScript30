function playSound(event) {
    var audio = document.querySelector("audio[data-key=\"".concat(event.keyCode, "\"]"));
    var key = document.querySelector(".key[data-key=\"".concat(event.keyCode, "\"]"));
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(event) {
    if (event.propertyName !== 'transform') {
        return;
    }
    event.target.classList.remove('playing');
}
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
    return key.addEventListener('transitionend', function (e) {
        return removeTransition(e);
    });
});
window.addEventListener('keydown', function (e) { return playSound(e); });
