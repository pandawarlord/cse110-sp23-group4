class Categories extends HTMLElement {
  // Called once when document.createElement('categories') is called, or
  // the element is written into the DOM directly as <categories>
  /*
  * Constructor
  ------------------------------------
  * Creates a new instance of Category
  *-----------------------------------
  * @param None
  * @return None
  */
  constructor() {
    super(); // Inheret everything from HTMLElement

    const Root = this.attachShadow({mode: 'open'});
    const categories = document.createElement('div');
    categories.setAttribute("class", "categories");
    const style = document.createElement('style');
    style.textContent = `
  /* All wooden panels */
  div.categories {
    text-decoration: none;
    flexbox;
  }

  /* Make a rectangle wooden panel */
  div.panel {

  }

  /* Make it fit in wooden panel */
  p#title {
    font-family: Inspiration;
  }`

    Root.appendChild(categories);
    Root.appendChild(style);
  }

  /**
   * Called when the .data property is set on the cateogry.
   *
   * For Example:
   * let recipeCard = document.createElement('categories'); // Calls constructor()
   * recipeCard.data = ['text1', 'text2'] // Calls set data(categories)
   *
   * @param {string array} text - The text to display on categories
   */
  set data(categories) {
    // If nothing was passed in, return
    if (!text) return;

    let layout = this.shadowRoot.querySelector('div');
    for (let i = 0; i < categories.length; i++) {
      let panel = document.createElement('div');
      panel.setAttribute("class", "panel");
      let title = document.createElement("p");
      title.setAttribute("id", "title");
      title.innerHTML = categories[i];
      panel.append(title);
      layout.append(panel);
    }
  }
}

customElements.define('categories', Categories);

