import data from "./data.mjs"
import './note-item.mjs'

const notesListElement = document.querySelector('#notesList')

const createNoteItemElement = ({id}) => {
    const container = document.createElement('note-item')
    container.setAttribute('id', id)
    return container
}

data.forEach(note => {
    const element = createNoteItemElement(note)
    notesListElement.append(element)
})

const form = document.querySelector('form')
const titleInput = form.elements.noteTitle


form.addEventListener('submit', (e) => e.preventDefault())

