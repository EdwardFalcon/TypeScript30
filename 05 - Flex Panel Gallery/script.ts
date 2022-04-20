const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  (this as HTMLElement).classList.toggle('open');
}

function toggleActive(e: Event) {
  if ((e as TransitionEvent).propertyName.includes('flex')) {
    (this as HTMLElement).classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
