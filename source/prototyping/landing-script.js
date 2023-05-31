hutBackground = document.querySelector('html');
enterButton = document.querySelector('button');
pageContents = document.querySelector('body');

function toMenuPage() {
  window.location.href='menu-prototype.html';
}

function enterHut() {
    setTimeout(toMenuPage, 500);
    pageContents.innerHTML = '';
    hutBackground.style.backgroundSize = '800%';
}

enterButton.addEventListener('click', enterHut);

