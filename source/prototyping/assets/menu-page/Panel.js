class Panel extends HTMLElement {
  // Called once when document.createElement('wood-panel') is called, or
  // the element is written into the DOM directly as <wood-panel>
  /*
  * Constructor
  ------------------------------------
  * Creates a new instance of Panel
  *-----------------------------------
  * @param None
  * @return None
  */
  constructor() {
    super(); // Inheret everything from HTMLElement

    const Root = this.attachShadow({mode: 'open'});
    const panel = document.createElement('div');
    panel.setAttribute('class', 'panel');
    const style = document.createElement('style');
    style.textContent = `
      /* Make a rectangle wooden panel */
      .panel {
        height: 200px;
        width: 60px;
      }

      .panel:hover {
        box-shadow: 0 0 10px 5px #ff0000;
      }

      .panel #panelImg {
        height: 100%;
        width: 100%;
      }

      /* Text in wooden panel */
      .panel #title {
        position: absolute;
        font-family: Tangerine;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0 0 5px #ff0000;
        writing-mode: vertical-rl;
        text-orientation: upright;
        text-align: center;
      }
    `;

    Root.appendChild(panel);
    Root.appendChild(style);
  }
  
  /**
   * Called when getting the .data property
   *
   * For Example:
   * let panel = document.createElement('panel'); // Calls constructor()
   * let panelText = panel.data; // calls get data()
   *
   * @return {string} text - The title text on the panel
   */
  get data() {
    return this.getAttribute("title");
  }

  /**
   * Called when the .data property is set on the cateogry.
   *
   * For Example:
   * let panel = document.createElement('panel'); // Calls constructor()
   * panel.data = "text" // Calls set data(panel)
   *
   * @param {string} text - The text to display on panel
   */
  set data(text) {
    // If nothing was passed in, return
    if (!text) return;

    let panel = this.shadowRoot.querySelector('.panel');
    let panelImage = document.createElement('img');
    panelImage.setAttribute('id', 'panelImg');
    panelImage.setAttribute("src", "assets/menu-page/wood-plank.png");
    panel.append(panelImage);
    let title = document.createElement("p");
    title.setAttribute("id", "title");
    title.innerHTML = text;
    let verticalOffset = (text.length/8);
    title.style.bottom = `50px`;
    panel.append(title);
  }
}

customElements.define('wood-panel', Panel);
