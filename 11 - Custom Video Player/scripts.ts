// Get our elements

const player = document.querySelector('.player') as HTMLElement;
const video = player.querySelector('.viewer') as HTMLVideoElement;
const progress = player.querySelector('.progress') as HTMLElement;
const progressBar = player.querySelector('.progress__filled') as HTMLElement;
const toggle = player.querySelector('.toggle') as HTMLButtonElement;
const skipButtons = player.querySelectorAll(
  '[data-skip]'
) as NodeListOf<HTMLButtonElement>;
const ranges = player.querySelectorAll(
  '.player__slider'
) as NodeListOf<HTMLInputElement>;

// Build out functions

function togglePlay(): void {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(this: HTMLVideoElement): void {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(this: HTMLButtonElement): void {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(this: HTMLInputElement): void {
  video[this.name] = this.value;
}

function handleProgress(): void {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e: MouseEvent): void {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener('mousemove', handleRangeUpdate)
);

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
