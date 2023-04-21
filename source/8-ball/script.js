let responses = [
  "It is certain",
  "Reply hazy, try again",
  "Don’t count on it",
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

function predict()
{
    var idx = Math.floor(Math.random() * 20);
    typeResponse(responses[idx]);
}

/*
  Takes in the predict answer and types out the answer
  by updating the html content one character at a time
*/
function typeResponse(response) {
  const chars = response.split("");
  let charIndex = 0;
  const result = document.getElementById("result");
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
