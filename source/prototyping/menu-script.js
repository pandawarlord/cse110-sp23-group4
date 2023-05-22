/**
 * @file Contains the event listeners for buttons on menu-prototype.html 
 * @author Michi Wada
 * @author Helen Lin
 */

/**
 * Array containing references to all the category buttons on menu-prototype.html
 * @type {HTMLCollectionOf<Element>}
 */
const categories = document.getElementsByClassName('category');

/**
 * Iterate through the categories and set onClick listeners to
 * each on to update localStorage with category chosen and
 * navigates user to card-prototype.html
 */
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', (event) => {
    /* Set data in local storage based on clicked category */
    localStorage.setItem('category', categories[i].id);
    window.location.href = 'card-prototype.html';
  });
}

/**
 * A reference to back button HTMlElement on menu-prototype.html
 * @type {HTMLElement | null}
 */
const backButton = document.getElementById('back');

/**
 * Adds an onClick listner to the reference to the back
 * button html element on menu-prototype.html so that when
 * clicked the user gets navigated to the Landing Page (landing-prototype.html)
 */
backButton.addEventListener('click', () => {
  window.location.href = 'landing-prototype.html';
});


/**
 * A reference to Saved Readings button HTMlElement on menu-prototype.html
 * @type {HTMLElement | null}
 */
const savedReadingsButton = document.getElementById('savedReadings');

/**
 * Adds an onClick listner to the reference to the Saved Readings
 * button html element on menu-prototype.html so that when
 * clicked the user gets navigated to the Saved Readings Page (saved-readings-prototype.html)
 */
savedReadingsButton.addEventListener('click', () => {
  window.location.href = 'saved-readings-prototype.html';
});
