const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '.inbox input[type="checkbox"]'
);

let lastChecked: HTMLInputElement;

function handleCheck(e): void {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
