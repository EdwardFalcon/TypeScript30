window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
var p = document.createElement('p');
var words = document.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result', function (e) {
    var results = e.results;
    var transcript = Array.from(results)
        .map(function (result) { return result[0]; })
        .map(function (result) { return result.transcript; })
        .join(' ');
    p.textContent = transcript;
    if (results[0].isFinal) {
        p = document.createElement('p');
        words === null || words === void 0 ? void 0 : words.appendChild(p);
    }
    console.log(transcript);
});
recognition.addEventListener('end', recognition.start);
recognition.start();
