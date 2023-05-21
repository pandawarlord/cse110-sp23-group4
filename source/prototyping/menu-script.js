/**
 * @file Script for managing the function of the button on the menu page.
 * @author Nakul, Josh
 */

const categories = document.querySelectorAll('button');

/* Iterate through the buttons and set each one accordingly */
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', (event) => {
    /* TODO: Set data in local storage based on clicked item */
    window.location.href = 'card-prototype.html';
  });
}