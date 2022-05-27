var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var walk = 500;
function shadow(e) {
    var width = hero.offsetWidth, height = hero.offsetHeight;
    var x = e.offsetX, y = e.offsetY;
    var target = e.target;
    if (this !== target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
    }
    var xWalk = Math.round((x / width) * walk - walk / 2);
    var yWalk = Math.round((y / height) * walk - walk / 2);
    text.style.textShadow = "\n    ".concat(xWalk, "px ").concat(yWalk, "px 0 rgb(255, 0, 255, 0.7),\n    ").concat(xWalk * -1, "px ").concat(yWalk, "px 0 rgb(0, 255, 255, 0.7),\n    ").concat(yWalk, "px ").concat(xWalk * -1, "px 0 rgb(0, 255, 0, 0.7),\n    ").concat(yWalk * -1, "px ").concat(xWalk, "px 0 rgb(0, 0, 255, 0.7)\n  ");
}
hero.addEventListener('mousemove', shadow);
