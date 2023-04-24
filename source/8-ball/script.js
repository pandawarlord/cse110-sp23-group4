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
    
    document.getElementById("ball").innerHTML = "<p id=\"answer\"></p>";

    const text = responses[idx];
    const voices = synth.getVoices();

    typeResponse(text);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[10];
    utterance.rate = 0.8;

    synth.speak(utterance);
}

/*
  Takes in the predict answer and types out the answer
  by updating the html content one character at a time
*/
function typeResponse(response) {
  const chars = response.split("");
  let charIndex = 0;
  const result = document.getElementById("answer");
  result.textContent = "";

  //Interval function used to type out on char at a time
  const interval = setInterval(()=> { 
    result.textContent +=chars[charIndex];
    charIndex++;

    //Finished Typing
    if (charIndex === chars.length) {
      clearInterval(interval)
    }
  }, 50)
}
