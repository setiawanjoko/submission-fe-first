class AppFooter extends HTMLElement {
  _shadowRoot = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "closed" });
  }

  renderStyle() {
    let style = document.createElement("style");
    style.textContent = `
        footer > * {
            color: white;
            font-family: sans-serif;
        }

        @media screen and (min-width: 768px) {
            footer {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        `;

    return style;
  }

  renderFooter() {
    let footer = document.createElement("footer");
    let credit = document.createElement("p");
    credit.textContent = "Made by Setiawan Joko";
    footer.appendChild(credit);

    return footer;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.appendChild(this.renderStyle());
    this._shadowRoot.appendChild(this.renderFooter());
  }
}

customElements.define("app-footer", AppFooter);
