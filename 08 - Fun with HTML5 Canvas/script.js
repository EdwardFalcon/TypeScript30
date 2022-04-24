var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;
function draw(e) {
    var _a;
    if (!isDrawing) {
        return;
    }
    ctx.strokeStyle = "hsl(".concat(hue, ", 100%, 50%)");
    ctx.lineWidth = hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function (e) {
    var _a;
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
    isDrawing = true;
});
canvas.addEventListener('mouseup', function () { return (isDrawing = false); });
canvas.addEventListener('mouseout', function () { return (isDrawing = false); });
