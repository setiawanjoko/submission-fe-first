import { LS_SORT, RENDER_EVENT } from "../common.js"

class NotesSort extends HTMLElement {

    constructor() {
        super()

        this._sort = localStorage.getItem(LS_SORT)
    }

    connectedCallback() {
        this.addEventListener('click', this.click)
        this.render()
    }

    click(){
        let sort = (this._sort == 'asc') ? 'desc' : 'asc'
        try{
            localStorage.setItem(LS_SORT, sort)
            this._sort = sort

            document.dispatchEvent(new CustomEvent(RENDER_EVENT))
        } catch (e) {
            console.log(e.message)
        }

    }

    render() {
        let span = document.createElement('span')
        span.className = 'material-symbols-outlined'
        span.textContent = 'swap_vert'
        span.style = 'cursor: pointer;'
        this.appendChild(span)
    }
}

customElements.define('notes-sort', NotesSort)