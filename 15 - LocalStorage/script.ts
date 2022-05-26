interface Item {
  text: string;
  done: boolean;
}

const addItems = document.querySelector('.add-items') as HTMLFormElement;
const itemsList = document.querySelector('.plates') as HTMLElement;
const items: Item[] = JSON.parse(localStorage.getItem('items')) || [];

function addItem(this: HTMLFormElement, e: SubmitEvent): void {
  e.preventDefault();
  const text = (this.querySelector('[name=item]') as HTMLInputElement).value;
  const item: Item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates: Item[] = [], platesList: HTMLElement): void {
  platesList.innerHTML = plates
    .map((plate, i: number) => {
      return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    })
    .join('');
}

function toggleDone(e: MouseEvent) {
  const el = e.target as HTMLElement;
  if (!el.matches('input')) {
    return;
  }
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
