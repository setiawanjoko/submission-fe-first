import data from "./dummy/data.js"
import './components/index.js'
import './validations/index.js'

const LOCAL_STORAGE_KEY = 'notes_fe_subs'
const notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

const notesListElement = document.querySelector('#notesList')

const createNoteItemElement = ({id}) => {
    const container = document.createElement('note-item')
    container.setAttribute('id', id)
    return container
}

if(typeof Storage !== 'undefined') {
    if(localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
        notes.push(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    }

    notes.forEach(note => {
        const element = createNoteItemElement(note)
        notesListElement.append(element)
    })
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage')
}