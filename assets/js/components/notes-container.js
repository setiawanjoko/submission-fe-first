import "./note-item.js";
import { LOCAL_STORAGE_KEY, RENDER_EVENT } from "../common.js";
import { getAllNotesHandler } from "../services.js";

class NotesContainer extends HTMLElement {
  static observedAttributes = ["note-scope", "sort"];
  validScope = ["all", "no-archive", "archive"];
  _archive = -1
  _notes = [];

  constructor() {
    super();

    this._notes = getAllNotesHandler
    this._sort = this.getAttribute('sort') || 'desc'
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
            this._notes = getAllNotesHandler();
        } else {
            this._notes = getAllNotesHandler().filter(note => {
                return note.archived == this._archive
            })
        }
    }

    if(name == 'sort') {
      this._sort = newValue
    }
    this.render()
  }

  render() {
    this._notes.sort((former, later) => {
      if(this._sort == 'desc') {
      // newer first
      return new Date(later.createdAt).getTime() - new Date(former.createdAt).getTime()
      } else {
      // older first
      return new Date(former.createdAt).getTime() - new Date(later.createdAt).getTime()
      }
    })
    let notes = this._notes
    try {
      document.dispatchEvent(new CustomEvent(RENDER_EVENT, {detail: {notes}}))
    } catch(e) {
      console.log(e.message)
    }
  }
}

customElements.define("notes-container", NotesContainer);
