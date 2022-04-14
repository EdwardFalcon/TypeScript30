var inputs = document.querySelectorAll('.controls input');
function handleUpdate(event) {
    var element = event.target;
    var suffix = element.dataset.sizing || '';
    document.documentElement.style.setProperty("--".concat(element.name), element.value + suffix);
}
inputs.forEach(function (input) {
    return input.addEventListener('change', function (e) { return handleUpdate(e); });
});
inputs.forEach(function (input) {
    return input.addEventListener('mousemove', function (e) { return handleUpdate(e); });
});
