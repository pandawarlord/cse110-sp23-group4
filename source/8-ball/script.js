let responses = [
  "It is certain",
  "Reply hazy, try again",
  "Don't count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "my sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"
];

const synth = window.speechSynthesis;

function predict()
{
    var idx = Math.floor(Math.random() * 20);
    document.getElementById("ball").innerHTML = "<p class=\"answer\">" + responses[idx] + "</p>";

    const text = responses[idx];
    const voices = synth.getVoices();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[10];
    utterance.rate = 0.8;

    synth.speak(utterance);
}

