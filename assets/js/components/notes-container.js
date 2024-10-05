import "./note-item.js";
import { LOCAL_STORAGE_KEY } from "../common.js";

class NotesContainer extends HTMLElement {
  static observedAttributes = ["note-scope"];
  validScope = ["all", "no-archive", "archive"];
  _archive = -1
  _notes = [];

  constructor() {
    super();

    this._notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.validScope.includes(newValue)) {
      this.setAttribute("note-scope", oldValue);
    } else {
        switch (newValue) {
            case "all": this._archive = -1; break;
            case "no-archive": this._archive = 0; break;
            case "archive": this._archive = 1; break;
        }
        
        if(this._archive == -1) {
            this._notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        } else {
            this._notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).filter(note => {
                return note.archived == this._archive
            })
        }

        this.render()
    }
  }

  render() {
    this.innerHTML = ''
    this._notes.forEach((note) => {
      let noteItem = document.createElement("note-item");
      noteItem.setAttribute("notes-id", note.id);
      noteItem.setAttribute("notes-title", note.title);
      noteItem.setAttribute("notes-body", note.body);

      this.appendChild(noteItem);
    });
  }
}

customElements.define("notes-container", NotesContainer);
