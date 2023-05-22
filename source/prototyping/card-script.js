/* TODO: The scope of these variables may be adjusted later */

/**
 * A reference to number of cards the user wants to display
 * @type {HTMLElement | null}
 */
const cardCount = document.getElementById('cardCount');

/**
 * A reference to the button for setting the card count
 * @type {HTMLElement | null}
 */
const setCardButton = document.getElementById('setCount');

/**
 * A reference to the number of cards the user wants to select
 * @type {HTMLElement | null}
 */
const selectCount = document.getElementById('selectCount');

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
 * A function used for an event listener in order to generate the number
 * of cards a user specifies in the input box
 */
function generateCards() {
  const cardWrapper = document.getElementById('cardWrapper');
  /* Set the default card count to 6 if blank */
  if (cardCount.value == "")
    cardCount.value = 6;

  /* Card content stub */
  cardContent = "";

  /* Generate cards and set card contents */
  for (let i = 0; i < cardCount.value; i++)
    cardContent += `<tarot-card id=\"card-${i}\">I am a Card!</tarot-card>`;
  cardWrapper.innerHTML = cardContent;
}
setCardButton.addEventListener("click", generateCards);

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
  if (selected.length !== 0) {
    /* Get a random fortune */
    res = Math.floor(Math.random() * cardCount.value);

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
predictButton.addEventListener("click", generatePrediction);

/**
 * This function is used for an event listener which is responsible for setting whether
 * or not a card has been selected for the tarot-card custom element
 */
function pickCard() {
  this.pick = !this.pick;
}

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
      this.style.backgroundColor = "#00ff00";

      selectBuffer.push(this.id);

      /* Deselect other cards if buffer is full */
      if (selectBuffer.length > selectCount.value) {
        /* remove selected cards from the selected buffer */
        const popCard = document.getElementById(selectBuffer.reverse().pop());
        selectBuffer.reverse();
        popCard.removeAttribute("pick", "");
        popCard.style.backgroundColor = "#ff0000";
      }
    } else {
      /* Deselect this card */
      this.removeAttribute("pick", "");
      this.style.backgroundColor = "#ff0000";

      /* Remove from selectBuf when deselecting a card */
      const idx = selectBuf.indexOf(this.id);
      selectBuf.splice(idx, 1);
    }
  }

  constructor() {
    super();

    /* Add listener for each card */
    this.addEventListener("click", pickCard);
  }
}

/* Register tarot-card custom element */
customElements.define("tarot-card", card);
