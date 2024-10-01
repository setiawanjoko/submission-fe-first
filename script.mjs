import data from "./data.mjs"
import './note-item.mjs'

const notesListElement = document.querySelector('#notesList')

const createNoteItemElement = ({id, title, body}) => {
    const container = document.createElement('note-item')
    container.setAttribute('id', id)
    return container
}

data.forEach(note => {
    const element = createNoteItemElement(note)
    notesListElement.append(element)
})