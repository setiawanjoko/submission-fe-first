import { ARCHIVE_EVENT, DELETE_EVENT, RENDER_EVENT, UNARCHIVE_EVENT } from "../common.js"
import Swal from 'sweetalert2'
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
        destroy.style = 'font-size: smaller; color: #4379F2; cursor: pointer; margin-left: 4px;'
        destroy.addEventListener('click', this.destroy.bind(this))

        this.append(titleElement, bodyElement, dating, archive, destroy)
    }

    archive() {
        const id = this.getAttribute('notes-id')
        
        if(this.getAttribute('notes-archived') == "true") {
            document.dispatchEvent(new CustomEvent(UNARCHIVE_EVENT, {detail: {id}}))
            Swal.fire("Catatan berhasil di unarchive")
        } else {
            document.dispatchEvent(new CustomEvent(ARCHIVE_EVENT, {detail: {id}}))
            Swal.fire("Catatan berhasil di archive")
        }
    }

    destroy() {
        let id = this.getAttribute('notes-id')
        let isDestroyed = document.dispatchEvent(new CustomEvent(DELETE_EVENT, {detail: {id}}))
        
        if(isDestroyed) document.dispatchEvent(new CustomEvent(RENDER_EVENT))
    }
}

customElements.define('note-item', NoteItem)