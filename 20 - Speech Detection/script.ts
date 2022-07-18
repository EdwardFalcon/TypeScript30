(window as any).SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words') as HTMLDivElement;
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  const results = e.results as SpeechRecognitionResultList;
  const transcript = Array.from(results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join(' ');
  p.textContent = transcript;
  if (results[0].isFinal) {
    p = document.createElement('p');
    words?.appendChild(p);
  }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();
