const hero = document.querySelector('.hero') as HTMLElement;
const text = hero.querySelector('h1') as HTMLElement;
const walk = 500;

function shadow(this: HTMLElement, e: MouseEvent) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  const target = e.target as HTMLElement;
  if (this !== target) {
    x = x + target.offsetLeft;
    y = y + target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgb(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgb(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgb(0, 0, 255, 0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
