import { deleteNoteHandler, getAllNotesHandler } from "./services.js"

const LOCAL_STORAGE_KEY = 'notes_fe_subs'
const RENDER_EVENT = 'render_notes'
const DELETE_EVENT = 'delete_note'

const renderNoteItems = (e) => {    
    let dateOptions = {day: 'numeric', month: 'long', year: 'numeric'}
    const noteList = document.querySelector('notes-container')
    noteList.innerHTML = ''
    let notes = e.detail.notes
    notes.forEach(note => {
      let noteItem = document.createElement("note-item");
      noteItem.setAttribute("notes-id", note.id);
      noteItem.setAttribute("notes-title", note.title);
      noteItem.setAttribute("notes-body", note.body);
      noteItem.setAttribute("notes-archived", note.archived)
      noteItem.setAttribute("notes-created", new Date(note.createdAt).toLocaleDateString('en-UK', dateOptions))

      noteList.appendChild(noteItem);
    });
}


const deleteNote = (e) => {
    let id = e.detail.id
    if( deleteNoteHandler(id) ) {
        return true;
    }

    return false;
}


document.addEventListener(RENDER_EVENT, renderNoteItems, false)
document.addEventListener(DELETE_EVENT, deleteNote, false)


export { LOCAL_STORAGE_KEY, RENDER_EVENT, DELETE_EVENT }