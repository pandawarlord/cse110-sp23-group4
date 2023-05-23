/**
 * @file Contains the event listeners for buttons on menu-prototype.html 
 * @author Michi Wada
 * @author Helen Lin
 */

/**
 * Array containing references to all the category buttons on menu-prototype.html
 * @type {HTMLCollection<Element>}
 */
const categories = document.getElementsByClassName('category');

/**
 * A reference to back button HTMlElement on menu-prototype.html
 * @type {HTMLElement | null}
 */
const backButton = document.getElementById('back');

/**
 * A reference to Saved Readings button HTMlElement on menu-prototype.html
 * @type {HTMLElement | null}
 */
const savedReadingsButton = document.getElementById('savedReadings');

/**
 * A function used for an event listener which is responsible for performing the 
 * necessary actions when a card is clicked on by the user such as saving card 
 * category type and redirecting them
 */
function setCardLink(i) {
  /* Set data in local storage based on clicked category */
  localStorage.setItem('category', JSON.stringify(categories[i].id));
  window.location.href = 'card-prototype.html';
}

/**
 * A function used for an event listener which is responsible for performing the
 * necessary actions when the landing page is clicked on by the user
 */
function setLandingLink() {
  window.location.href = 'landing-prototype.html';
}

/**
 * A function used for an event listener which is responsible for performing the
 * necessary actions when the saved readings page is clicked
 */
function setSavedReadingsLink() {
  window.location.href = 'saved-readings-prototype.html';
}

/*
 * Iterate through the categories and set onClick listeners to each on to update 
 * localStorage with category chosen and navigates user to card-prototype.html
 */
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function () {
    setCardLink(i);
  });
}

/*
 * Adds an onClick listner to the reference to the back button html element on 
 * menu-prototype.html so that when clicked the user gets navigated to the 
 * Landing Page (landing-prototype.html)
 */
backButton.addEventListener('click', setLandingLink);

/*
 * Adds an onClick listner to the reference to the Saved Readings button html 
 * element on menu-prototype.html so that when clicked the user gets navigated 
 * to the Saved Readings Page (saved-readings-prototype.html)
 */
savedReadingsButton.addEventListener('click', setSavedReadingsLink);
