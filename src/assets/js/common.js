import { deleteNoteHandler, getNotesHandler, getArchivedHandler } from "./services.js"

const URL = "https://notes-api.dicoding.dev/v2"
const LS_SORT = 'sort'
const LS_SCOPE = 'scope'
const RENDER_EVENT = 'render_notes'
const DELETE_EVENT = 'delete_note'

const sorting = (former, later) => {
    if(localStorage.getItem(LS_SORT) === 'desc') {
        // newer first
        return new Date(later.createdAt).getTime() - new Date(former.createdAt).getTime()
        } else {
        // older first
        return new Date(former.createdAt).getTime() - new Date(later.createdAt).getTime()
        }
}

const renderNoteItems = async (e) => {    
    let dateOptions = {day: 'numeric', month: 'long', year: 'numeric'}
    let notes = []
    const noteList = document.querySelector('notes-container')

    let isArchived = localStorage.getItem(LS_SCOPE)
    //console.log("isArchived", isArchived, typeof(isArchived))
    if(isArchived === "true") {
        notes = await getArchivedHandler()
    } else {
        notes = await getNotesHandler()
    }
    //console.log(notes)
    notes.sort(sorting)
    noteList.innerHTML = ''
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

const addNote = (e) => {
    let note = e.detail.note

}

const deleteNote = (e) => {
    let id = e.detail.id
    return deleteNoteHandler(id);
}


document.addEventListener(RENDER_EVENT, renderNoteItems, false)
document.addEventListener(DELETE_EVENT, deleteNote, false)


export { LS_SCOPE, LS_SORT, RENDER_EVENT, DELETE_EVENT, URL }



students => plural
