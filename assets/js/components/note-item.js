import { LOCAL_STORAGE_KEY, DELETE_EVENT, RENDER_EVENT } from "../common.js"
import { getAllNotesHandler } from "../services.js"
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
        const dating = document.createElement('p')
        dating.innerHTML = this.getAttribute('notes-created')
        dating.style = 'margin-bottom: 0px;'
        const archive = document.createElement('a')
        archive.innerHTML = ( JSON.parse(this.getAttribute('notes-archived')) )? 'Activate' : 'Archive'
        archive.style = 'font-size: smaller; color: #4379F2; cursor: pointer;'
        archive.addEventListener('click', this.archive.bind(this))
        
        const destroy = document.createElement('a')
        destroy.innerHTML = 'Delete'
        destroy.style = 'font-size: smaller; color: #4379F2; cursor: pointer;'
        destroy.addEventListener('click', this.destroy.bind(this))

        this.append(titleElement, bodyElement, dating, archive, destroy)
    }

    archive() {
        const id = this.parentNode.getAttribute('notes-id')
        const notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        const index = notes.findIndex((note) => {
            return note.id == id
        })
        notes[index].archived = !(notes[index].archived)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    }

    destroy() {
        let id = this.getAttribute('notes-id')
        let isDestroyed = document.dispatchEvent(new CustomEvent(DELETE_EVENT, {detail: {id}}))
        
        let notes = getAllNotesHandler()
        console.log(notes)
        if(isDestroyed) document.dispatchEvent(new CustomEvent(RENDER_EVENT, {detail:{notes}}))
    }
}

customElements.define('note-item', NoteItem)