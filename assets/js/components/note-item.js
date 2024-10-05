import data from "../dummy/data.js"

class NoteItem extends HTMLElement {
    static observedAttributes = ['notes-id', 'notes-title', 'notes-body']
    constructor() {
        super()
    }

    connectedCallback() {
        const titleElement = document.createElement('h3')
        titleElement.textContent = this.getAttribute('notes-title')
        const bodyElement = document.createElement('p')
        bodyElement.innerHTML = this.getAttribute('notes-body')

        this.append(titleElement, bodyElement)
    }
}

customElements.define('note-item', NoteItem)