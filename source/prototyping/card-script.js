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
const newCategory = document.getElementById('newCategory');
const tarotCards = document.getElementsByClassName('card');

newCategory.addEventListener("click", (event) => {
  window.location.href='menu-prototype.html';
});

// Array of selected cards, based on card number, from 0 to 5 for 6 cards
let selectBuf = [];

for (let i = 0; i < tarotCards.length; i++) {
  tarotCards[i].addEventListener("click", (event) => {
    const index = selectBuf.indexOf(i);
    if (index == -1) {
      /* Select this card */
      selectBuf.push(i);
      tarotCards[i].style.boxShadow = "0 0 10px 5px #ff0000";

      /* Deselect other cards if buffer is full */
      if (selectBuf.length > selectCount.value) {
        /* remove selected cards from the selected buffer */
        tarotCards[selectBuf[0]].style.boxShadow = null;
        selectBuf.shift();
      }

    } else {
      /* Deselect this card */
      tarotCards[i].style.boxShadow = null;

      /* Remove from selectBuf when deselecting a card */
      selectBuf.splice(index, 1);
    }
  });
}

/* Get selected cards */
predictBtn.addEventListener("click", (event) => {
  /* 
  TODO: Yes, this is dumb but we can customize responses this way 
  Output will be selected based on the category and its specifications
  */
  const numbers = ["1","2","3","4","5","6","7","8","9","10"];

  const predictOut = document.getElementById('output');
  
  if (selectCount.value !== 0 && selectBuf.length == selectCount.value) {
    /* Generate output */
    res = Math.floor(Math.random() * 6);
    outputContent = "";
    for (let i = 0; i < selectBuf.length; i++)
      outputContent += `${tarotCards[i].id} `
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res]}</p>`
  } else
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`
    /* Always insult the user when they make a mistake */
});

/*
// set number of cards based on input
setCardBtn.addEventListener("click", (event) => {
  const cardWrapper= document.getElementById('cardWrapper');
  if (cardCount.value == "" || cardCount.value > 6)
    cardCount.value = 6;
  cardContent = "";

  // Generate and set contents
  for (let i = 0; i < cardCount.value; i++)
    cardContent += `<tarot-card id=\"card-${i}\">`;
  cardWrapper.innerHTML = cardContent;
});
*/

/*
// Custom element here
class card extends HTMLElement {
  // Check if pick attribute exists
  get pick() {
    return this.hasAttribute("pick");
  }

  // assign pick and change color
  set pick(val) {
    if (val) {
      // Deselect other cards 

      // Select this card 
      this.setAttribute("pick", "");
      this.style.backgroundColor = "#00ff00"
      
      selectBuf.push(this.id);

      // Deselect other cards if buffer is full
      if (selectBuf.length > selectCount.value) {
        // remove selected cards from the selected buffer 
        const popCard = document.getElementById(selectBuf.reverse().pop());
        selectBuf.reverse();
        popCard.removeAttribute("pick", "");
        popCard.style.backgroundColor = "#ff0000";
      }

    } else {
      // Deselect this card 
      this.removeAttribute("pick", "");
      this.style.backgroundColor = "#ff0000"

      // Remove from selectBuf when deselecting a card
      const idx = selectBuf.indexOf(this.id);
      selectBuf.splice(idx, 1);
    }
  }

  constructor() {
    super();
   
    // Add listener for each card
    this.addEventListener("click", (event) => {
      this.pick = !this.pick;
    });
  }
}

// Register element
customElements.define("tarot-card", card);
*/
