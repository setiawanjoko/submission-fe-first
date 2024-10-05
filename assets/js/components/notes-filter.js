class NotesFilter extends HTMLElement {
  static observedAttributes = ["active"];
  _mapping = {
    all: "All",
    archive: "Archived",
    'no-archive': "Active"
  }
  _shadowRoot = null

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.addEventListener('click', this.click)
    this.render()
  }

  render() {
    this._shadowRoot.innerHTML = ''
    const anchor = document.createElement('a')
    if(this.hasAttribute('active')) {
        anchor.style = 'text-decoration: underline;'
    } else {
        anchor.style = 'text-decoration: none; color: #4379F2; cursor: pointer;'
    }
    anchor.textContent = this._mapping[this.getAttribute('note-scope')]

    this._shadowRoot.appendChild(anchor)
  }

  click() {
    const filter = document.querySelector('notes-filter[active]')
    filter.toggleAttribute('active')
    this.toggleAttribute("active");
    this.render()
  }

  attributeChangedCallback() {
    if (this.hasAttribute("active")) {
      const notesContainer = document.querySelector("notes-container");
      notesContainer.setAttribute(
        "note-scope",
        this.getAttribute("note-scope")
      );
    }

    this.render()
  }
}

customElements.define("notes-filter", NotesFilter);
