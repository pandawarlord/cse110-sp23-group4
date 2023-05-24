const categories = document.getElementById('categories');
const titles = [
  "Love",
  "Future",
  "Career",
  "School"
];

window.addEventListener('DOMContentLoaded', createPanels);

function createPanels() {
  for (let i = 0; i < titles.length; i++) {
    let newCategory = document.createElement("wood-panel");
    newCategory.data = titles[i];
    newCategory.addEventListener('click', (event) => {
    /* TODO: Set data in local storage based on clicked item */
      window.location.href = 'card-prototype.html';
    });
    newCategory.addEventListener('hover', (event) => {

    });
    categories.appendChild(newCategory);
  }
}
