// All stock responses
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
const eight = document.getElementById("eight");     // eight image
const flame = document.getElementById("flame");       // flame animation
const ball = document.getElementById("ball");         // eight ball

let displayOffset = [ball.offsetLeft, ball.offsetTop]; // position of display
let ballOffset    = [0, 0]; // position of ball
let isMoving      = false;  // check if ball has been shaken
let isDown        = false;  // check if mouse clicked

/*
 * Mouse down function
 */
ball.addEventListener('mousedown', (e) => {
    ball.style.backgroundColor = "black";
    eight.style.visibility = 'hidden';
    flame.style.visibility = 'hidden';
    isDown = true;
    // Position of ball relative to mouse
    ballOffset = [
        ball.offsetLeft - e.clientX,
        ball.offsetTop  - e.clientY
    ];
});

/*
 * Update 8-ball while mouse is down
 */
document.addEventListener('mousemove', (event) => {
    if (isDown) {
        // update ball position
        ball.style.left = (event.clientX + ballOffset[0]) + 'px';
        ball.style.top  = (event.clientY + ballOffset[1]) + 'px';
        // update display position
        // check if ball shaken hard enough
        if (Math.pow((ballOffset[0] - event.clientX)**2 + (ballOffset[1] - event.clientY)**2, 0.5) >= 10.0) { 
          isMoving = true;
        }
    }
});

/*
 * Mouse up - stop shaking
 */
document.addEventListener('mouseup', () => {
    ball.style.backgroundColor = "white"; // show result
    flame.style.visibility = 'visible';   // show flames

    isDown   = false; // no longer moving
    // put ball at original position
    ball.style.left = displayOffset[0] + 'px'; 
    ball.style.top  = displayOffset[1] + 'px';
    // Show response or not
    if (isMoving) { predict(); }
    else { response.innerHTML = "Shake the ball!"; }
    isMoving = false;
});

/*
 * Get random prediction
 */
function predict()
{
    if (document.getElementById("question_tb").value == "") {
      response.innerHTML = "Please ask a question";
    }
    else {
      var idx = Math.floor(Math.random() * 20);
      response.innerHTML = responses[idx];

      const text = responses[idx];
      const voices = synth.getVoices();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices[10];
      utterance.rate = 0.8;

      synth.speak(utterance);
    }
}

