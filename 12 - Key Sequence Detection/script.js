var pressed = [];
var secretCode = 'wesbos';
window.addEventListener('keyup', function (e) {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('DING! DING!');
        cornify_add();
    }
    console.log(pressed);
});
