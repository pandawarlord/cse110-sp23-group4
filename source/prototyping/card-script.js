/**
 * A reference to the number of cards the user wants to select
 * @type {int}
 */
let selectCount;

/**
 * Set the number of cards to appear to be 6
 * @type {int}
 */
let cardCount = 6;

/**
 * A reference to a button to get the tarot card predictions
 * @type {HTMLElement | null}
 */
const predictButton = document.getElementById('getTarot');

/**
 * Array containing the id strings of all selected cards
 * @type {string[]}
 */
let selectBuffer = [];

/**
 * A reference to back button HTMlElement on card-prototype.html
 * @type {HTMLElement | null}
 */
const returnToMenuButton = document.getElementById('returnMenu');

/**
 * A reference to all card images 
 * @type {HTMLCollection img | null}
 */
const tarotCards = document.getElementsByClassName('card');


window.addEventListener('load', init);

/**
 * Function containing all intial setup functions for generating cards 
 * and event listeners for the buttons on the page
 */
function init() {
  for (let i = 0; i < tarotCards.length; i++) {
    tarotCards[i].addEventListener("click", function () { chooseCard(i); });
  }

  /* Register tarot-card custom element */
  //customElements.define("tarot-card", card);

  /* Get category from local storage */
  let category = JSON.parse(localStorage.getItem("category"));

  /* Set selectCount value from category */
  switch (category) {
    case "education":
      selectCount = 3;
      break;
    case "love":
    case "life":
    default:
      selectCount = 1;
      break;
  }

  /* Generate visual images of cards */
  //generateCards();

  /* Add event listener for predicting fortune button */
  predictButton.addEventListener("click", generatePrediction);

  /* Add event listener for return to menu button to go back to menu page */
  returnToMenuButton.addEventListener("click", returnToMenu);
}

function returnToMenu() {
  window.location.href = "menu-prototype.html";
}

/**
 * A function used for an event listener in order to generate the prediction
 * when the user has selected their cards
 */
function generatePrediction() {
  /* 
   * TODO: Write out the actual predictions and maybe make the prediction 
   * algorithm smarter instead of PRNG 
   */
  
  /**
   * Array containing the strings of the responses from the tarot cards
   * @type {string[]}
   */
  const numbers = ["1","2","3","4","5","6","7","8","9","10"];

  /**
   * A reference to the output area for the result of the reading
   * @type {HTMLElement | null}
   */
  const predictOut = document.getElementById('output');

  /* Verify items are selected */
  if (selectBuffer && selectBuffer.length === selectCount) {
    /* Get a random fortune */
    res = Math.floor(Math.random() * cardCount);

    /**
     * String used for storing the output of the prediction
     * @type {string}
     */
    let outputContent = "";

    /* Add selected cards to output */
    for (let i = 0; i < selectBuffer.length; i++)
      outputContent += `${tarotCards[selectBuffer[i]].id} `;

    /* Give the user a prediction */
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res % selectBuffer.length]}</p>`;
  } else {
    /* Display a message that the user selected nothing */
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`;
  }
}

function chooseCard (i) {
  const index = selectBuffer.indexOf(i);
  if (index == -1) {
    selectBuffer.push(i);
    tarotCards[i].style.boxShadow = "0 0 10px 5px #ff0000";

    if (selectBuffer.length > selectCount) {
      tarotCards[selectBuffer[0]].style.boxShadow = null;
      selectBuffer.shift();
    }

  } else {
    tarotCards[i].style.boxShadow = null;

    selectBuffer.splice(index, 1);
  }
}


/*
// Array of selected cards, based on card number, from 0 to 5 for 6 cards
let selectBuffer = [];

function chooseCard () {
  const index = selectBuf.indexOf(i);
  if (index == -1) {
    selectBuf.push(i);
    tarotCards[i].style.boxShadow = "0 0 10px 5px #ff0000";

    if (selectBuf.length > selectCount.value) {
      tarotCards[selectBuf[0]].style.boxShadow = null;
      selectBuf.shift();
    }

  } else {
    tarotCards[i].style.boxShadow = null;

    selectBuf.splice(index, 1);
  }
}

predictBtn.addEventListener("click", (event) => {
  const numbers = ["1","2","3","4","5","6","7","8","9","10"];

  const predictOut = document.getElementById('output');
  
  if (selectCount.value !== 0 && selectBuf.length == selectCount.value) {
    res = Math.floor(Math.random() * 6);
    outputContent = "";
    for (let i = 0; i < selectBuf.length; i++)
      outputContent += `${tarotCards[i].id} `
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res]}</p>`
  } else
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`
});
*/

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
