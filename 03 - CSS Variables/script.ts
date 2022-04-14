const inputs: NodeList = document.querySelectorAll('.controls input');

function handleUpdate(event: Event): void {
  const element = event.target as HTMLInputElement;
  const suffix: string = element.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${element.name}`,
    element.value + suffix
  );
}

inputs.forEach((input) =>
  input.addEventListener('change', (e) => handleUpdate(e))
);

inputs.forEach((input) =>
  input.addEventListener('mousemove', (e) => handleUpdate(e))
);
