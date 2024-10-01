import data from "./data.mjs"

class NoteItem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this._note = data.filter(note => {
            return this.getAttribute('id') === note.id
        }).pop()

        const titleElement = document.createElement('h3')
        titleElement.textContent = this._note.title
        const bodyElement = document.createElement('p')
        bodyElement.innerText = this._note.body

        this.append(titleElement, bodyElement)
    }
}

customElements.define('note-item', NoteItem)