const categories = document.getElementsByClassName('category');

/* Iterate through the buttons and set each one accordingly */
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', (event) => {
    /* Set data in local storage based on clicked category */
    localStorage.setItem('category', categories[i].id);
    window.location.href = 'card-prototype.html';
  });
}


//Grabs the Back Button and Routes to Landing Page When clicked
const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
  window.location.href = 'landing-prototype.html';
})


//Grabs the Saved Readings and Routes to Landing Page When clicked
const historyButton = document.getElementById('history');
historyButton.addEventListener('click', () => {
  window.location.href = 'history-prototype.html';
})