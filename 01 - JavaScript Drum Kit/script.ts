function playSound(event: KeyboardEvent): void {
  const audio: HTMLAudioElement = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event: TransitionEvent): void {
  if ((event as TransitionEvent).propertyName !== 'transform') {
    return;
  }
  (event.target as HTMLElement).classList.remove('playing');
}

const keys: NodeList = document.querySelectorAll('.key');

keys.forEach((key: Node) =>
  key.addEventListener('transitionend', (e) =>
    removeTransition(e as TransitionEvent)
  )
);

window.addEventListener('keydown', (e) => playSound(e));
