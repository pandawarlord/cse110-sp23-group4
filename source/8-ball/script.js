/*
 * These are a list of generic 8-ball responsese to be returned
 */
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

const response = document.getElementById("response"); // Output response
const ball     = document.getElementById("ball");     // eight ball

let ballDisplayOffset = [ball.offsetLeft, ball.offsetTop]; // position of display

let ballOffset    = [0, 0]; // position of ball

let isMoving      = false;  // check if ball has been shaken
let isDown        = false;  // check if mouse clicked

/*
 * Mouse down function
 */
ball.addEventListener('mousedown', (e) => 
{
    e.preventDefault(); // disallow highlighting while shaking
    // Only allow shaking if done speaking
    if (!synth.speaking) {
        response.innerHTML = ""; // hide response while shaking
        isDown = true;

        // Position of ball relative to mouse
        ballOffset = [
            ball.offsetLeft - e.clientX,
            ball.offsetTop  - e.clientY
        ];
    }
});

/*
 * Update 8-ball while mouse is down
 */
document.addEventListener('mousemove', (event) => 
{
    if (isDown) {
        // update ball position
        ball.style.left = (event.clientX + ballOffset[0]) + 'px';
        ball.style.top  = (event.clientY + ballOffset[1]) + 'px';
        // update display position
        // check if ball shaken hard enough
        if (Math.pow((ballDisplayOffset[0] - ball.offsetLeft)**2 + (ballDisplayOffset[1] - ball.offsetTop)**2, 0.5) >= 300.0) { 
          isMoving = true;
        }
    }
});

/*
 * Mouse up - stop shaking
 */
document.addEventListener('mouseup', () => 
{
    // put ball at original position
    ball.style.left = ballDisplayOffset[0] + 'px'; 
    ball.style.top  = ballDisplayOffset[1] + 'px';

    // Show response or not
    if (isMoving) { predict(); }
    else if(!synth.speaking) { response.innerHTML = "Shake the ball!"; }
    isMoving = false;
    isDown   = false; // no longer moving
});

/*
 * Function which gets the prediction and presents it
 */
function predict()
{
    var text;
    const voices = synth.getVoices();

    if (document.getElementById("question_tb").value == "") {
      text = "Please ask a question";
    }
    else {
      var idx = Math.floor(Math.random() * 20);
      text = responses[idx];
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[10];
    utterance.rate = 0.8;

    synth.speak(utterance);
    typeResponse(text);
}

/*
 * Takes in the predict answer and types out the answer
 * by updating the html content one character at a time
 */
function typeResponse(response) {
  const chars = response.split("");
  let charIndex = 0;
  const result = document.getElementById("response");
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
