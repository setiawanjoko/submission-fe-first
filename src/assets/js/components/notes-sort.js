class NotesSort extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.addEventListener('click', this.click)
        this.render()
    }

    click() {
        const notesContainer = document.querySelector('notes-container')
        let sort = (notesContainer.getAttribute('sort') == 'asc') ? 'desc' : 'asc'
        notesContainer.setAttribute('sort', sort)
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