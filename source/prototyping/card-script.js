/*
This is a early test version for the tarot card software to
verify that the back-end exists and is functional for the
cse 110 class at UCSD.
Authored by Joshua Tan on 05/12/2023
*/

/* Get objects */
const setCardBtn = document.getElementById('setCount');
const cardCount = document.getElementById('cardCount');
const predictBtn = document.getElementById('getTarot');
const selectCount = document.getElementById('selectCount');

let selectBuf = [];

/* set number of cards based on input */
setCardBtn.addEventListener("click", (event) => {
  const cardWrapper= document.getElementById('cardWrapper');
  if (cardCount.value == "")
    cardCount.value = 6;
  cardContent = "";

  /* Generate and set contents */
  for (let i = 0; i < cardCount.value; i++)
    cardContent += `<tarot-card id=\"card-${i}\">I am a Card!</tarot-card>`;
  cardWrapper.innerHTML = cardContent;
});

/* Get selected cards */
predictBtn.addEventListener("click", (event) => {
  /* Yes, this is dumb but we can customize responses this way */
  const numbers = ["1","2","3","4","5","6","7","8","9","10"];

  const predictOut = document.getElementById('output');
  const selected = document.querySelectorAll('[pick=""]');
  
  if (selected.length !== 0) {
    /* Generate output */
    res = Math.floor(Math.random() * cardCount.value);
    outputContent = "";
    for (let i = 0; i < selected.length; i++)
      outputContent += `${selected[i].id} `
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res]}</p>`
  } else
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`
    /* Always insult the user when they make a mistake */
});

/* Custom element here */
class card extends HTMLElement {
  /* Check if pick attribute exists */
  get pick() {
    return this.hasAttribute("pick");
  }

  /* assign pick and change color */
  set pick(val) {
    if (val) {
      /* Deselect other cards */

      /* Select this card */
      this.setAttribute("pick", "");
      this.style.backgroundColor = "#00ff00"
      
      selectBuf.push(this.id);

      /* Deselect other cards if buffer is full */
      if (selectBuf.length > selectCount.value) {
        /* remove selected cards from the selected buffer */
        const popCard = document.getElementById(selectBuf.reverse().pop());
        selectBuf.reverse();
        popCard.removeAttribute("pick", "");
        popCard.style.backgroundColor = "#ff0000";
      }

    } else {
      /* Deselect this card */
      this.removeAttribute("pick", "");
      this.style.backgroundColor = "#ff0000"

      /* Remove from selectBuf when deselecting a card */
      const idx = selectBuf.indexOf(this.id);
      selectBuf.splice(idx, 1);
    }
  }

  constructor() {
    super();
   
    /* Add listener for each card */ 
    this.addEventListener("click", (event) => {
      this.pick = !this.pick;
    });
  }
}

/* Register element */
customElements.define("tarot-card", card);
