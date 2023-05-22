/* TODO: The scope of these variables may be adjusted later */

/**
 * A reference to the number of cards the user wants to select
 * @type {int}
 */
let selectCount;

/**
 * Se the number of cards to appear to be 6
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


window.addEventListener('load', init);

/**
 * Function containing all intial setup functions for generating cards 
 * and event listeners for the buttons on the page
 */
function init() {
  /* Register tarot-card custom element */
  customElements.define("tarot-card", card);

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
  generateCards();

  /* Add event listener for predicting fortune button */
  predictButton.addEventListener("click", generatePrediction);

  /* Add event listener for return to menu button to go back to menu page */
  returnToMenuButton.addEventListener("click", returnToMenu);
}

function returnToMenu() {
  window.location.href = "menu-prototype.html";
}

/**
 * A function used for an event listener in order to generate the number
 * of cards a user specifies in the input box
 */
function generateCards() {
  const cardWrapper = document.getElementById('cardWrapper');

  /* Card content stub */
  let cardContent = "";

  /* Generate cards and set card contents */
  for (let i = 0; i < cardCount; i++) {
    cardContent += `<tarot-card id=\"card-${i}\">I am a Card!</tarot-card>`;
  }
  cardWrapper.innerHTML = cardContent;
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

  /**
   * An array of all the cards that the user has selected 
   * @type {NodeList<Element>}
   */
  const selected = document.querySelectorAll('[pick=""]');

  /* Verify items are selected */
  if (selected.length === selectCount) {
    /* Get a random fortune */
    res = Math.floor(Math.random() * cardCount);

    /**
     * String used for storing the output of the prediction
     * @type {string}
     */
    let outputContent = "";

    /* Add selected cards to output */
    for (let i = 0; i < selected.length; i++)
      outputContent += `${selected[i].id} `;

    /* Give the user a prediction */
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res % selected.length]}</p>`;
  } else {
    /* Display a message that the user selected nothing */
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`;
  }
}

/**
 * This function is used for an event listener which is responsible for setting whether
 * or not a card has been selected for the tarot-card custom element
 */
function pickCard() {
  this.pick = !this.pick;
}

/**
 * This class is the HTML element which represents the tarot card which is displayed
 * and interacted with
 * @extends {HTMLElement}
 */
class card extends HTMLElement {
  /**
   * A getter function which checks if the tarot-card element has the "pick" attribute
   */
  get pick() {
    return this.hasAttribute("pick");
  }

  /**
   * A setter function which changes the tarot-card properties based on if is has the
   * "pick" attribute already or needs to be assigned it.
   * This function is also responsible for handling the selection buffer 
   * @param {string} pick status
   */
  set pick(val) {
    if (val) {
      /* Select this card */
      this.setAttribute("pick", "");
      this.style.backgroundColor = "#00ff00";

      /* Add the card to the selection buffer */
      selectBuffer.push(this.id);

      /* Deselect other cards if buffer is full */
      if (selectBuffer.length > selectCount) {
        /* remove selected cards from the selected buffer */

        /**
         * A reference to the earliest card selected 
         * @type {tarot-card | null}
         */
        const popCard = document.getElementById(selectBuffer.reverse().pop());

        /* Remove the first card from buffer */
        selectBuffer.reverse();
        popCard.removeAttribute("pick", "");
        popCard.style.backgroundColor = "#ff0000";
      }
    } else {
      /* Deselect this card */
      this.removeAttribute("pick", "");
      this.style.backgroundColor = "#ff0000";

      /**
       * An integer of this deselected card's index
       * @type {int}
       */
      const idx = selectBuffer.indexOf(this.id);

      /* Remove from selectBuf when deselecting a card */
      selectBuffer.splice(idx, 1);
    }
  }

  constructor() {
    super();

    /* Add listener for each card */
    this.addEventListener("click", pickCard);
  }
}
