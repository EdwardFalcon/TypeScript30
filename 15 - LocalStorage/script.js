var addItems = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];
function addItem(e) {
    e.preventDefault();
    var text = this.querySelector('[name=item]').value;
    var item = {
        text: text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
function populateList(plates, platesList) {
    if (plates === void 0) { plates = []; }
    platesList.innerHTML = plates
        .map(function (plate, i) {
        return "\n            <li>\n                <input type=\"checkbox\" data-index=\"".concat(i, "\" id=\"item").concat(i, "\" ").concat(plate.done ? 'checked' : '', " />\n                <label for=\"item").concat(i, "\">").concat(plate.text, "</label>\n            </li>\n        ");
    })
        .join('');
}
function toggleDone(e) {
    var el = e.target;
    if (!el.matches('input')) {
        return;
    }
    var index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
