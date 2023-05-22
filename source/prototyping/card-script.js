const setCardButton = document.getElementById('setCount');
const cardCount = document.getElementById('cardCount');
const predictButton = document.getElementById('getTarot');
const selectCount = document.getElementById('selectCount');

let selectBuf = [];

function generateCards() {
  const cardWrapper = document.getElementById('cardWrapper');
  /* Set the default value */
  if (cardCount.value == "")
    cardCount.value = 6;

  /* Card content stub */
  cardContent = "";

  /* Generate and set contents */
  for (let i = 0; i < cardCount.value; i++)
    cardContent += `<tarot-card id=\"card-${i}\">I am a Card!</tarot-card>`;
  cardWrapper.innerHTML = cardContent;
}
setCardButton.addEventListener("click", generateCards);

function generatePrediction() {
  /*
  TODO: Yes, this is dumb but we can customize responses this way
  Output will be selected based on the category and its specifications
  */
  const numbers = ["1","2","3","4","5","6","7","8","9","10"];

  const predictOut = document.getElementById('output');
  const selected = document.querySelectorAll('[pick=""]');

  if (selected.length !== 0) {
    /* Generate output */
    res = Math.floor(Math.random() * cardCount.value);
    outputContent = "";
    for (let i = 0; i < selected.length; i++)
      outputContent += `${selected[i].id} `;
    predictOut.innerHTML = `<p>You selected the following: ${outputContent}<br>Here is a random number: ${numbers[res % selected.length]}</p>`;
  } else
    predictOut.innerHTML = `<p>You did not select anything stupid!<p>`;
    /* Always insult the user when they make a mistake */
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

/* Register element */
customElements.define("tarot-card", card);
