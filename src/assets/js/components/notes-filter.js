import { LS_SCOPE, RENDER_EVENT } from "../common.js";

class NotesFilter extends HTMLElement {
  static observedAttributes = ["active", "archive"];
  _mapping = {
    false: "Active",
    true: "Archived"
  }
  _shadowRoot = null

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this.addEventListener('click', this.click)
  }

  render() {
    this._shadowRoot.innerHTML = ''
    const anchor = document.createElement('a')
    if(this.hasAttribute('active')) {
        anchor.style = 'text-decoration: underline;'
    } else {
        anchor.style = 'text-decoration: none; color: #4379F2; cursor: pointer;'
    }
    anchor.textContent = this._mapping[this.getAttribute('archive')]

    //console.log("RENDERED: notes-filter")
    this._shadowRoot.appendChild(anchor)
  }

  click() {
    // Remove active attribute in active filter
    const filter = document.querySelector('notes-filter[active]')
    filter.toggleAttribute('active')

    // Add active attribute in this filter (clicked)
    this.toggleAttribute("active");
    localStorage.setItem(LS_SCOPE, this.getAttribute("archive"))

    document.dispatchEvent(new CustomEvent(RENDER_EVENT))
    //console.log("EVENT TRIGGERED: notes-filter click")

    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }
}

customElements.define("notes-filter", NotesFilter);
