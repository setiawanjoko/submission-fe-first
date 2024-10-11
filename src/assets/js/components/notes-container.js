import "./note-item.js";
import { RENDER_EVENT } from "../common.js";

class NotesContainer extends HTMLElement {
  constructor() {
    super();

    this.render()
  }

  render() {
    try {
      document.dispatchEvent(new CustomEvent(RENDER_EVENT))
      //console.log("RENDERED: notes-container")
    } catch(e) {
      console.log(e.message)
    }
  }
}

customElements.define("notes-container", NotesContainer);
