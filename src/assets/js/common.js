//import Swal from 'sweetalert2'
import { deleteNoteHandler, getNotesHandler, getArchivedHandler, addNoteHandler, archiveNoteHandler, unarchiveNoteHandler } from "./services.js"

const URL = "https://notes-api.dicoding.dev/v2"
const LS_SORT = 'sort'
const LS_SCOPE = 'scope'
const RENDER_EVENT = 'render_notes'
const STORE_EVENT = 'store_note'
const ARCHIVE_EVENT = 'archive_note'
const UNARCHIVE_EVENT = 'unarchive_note'
const DELETE_EVENT = 'delete_note'

const sorting = (former, later) => {
    //console.log("SORTED:", localStorage.getItem(LS_SORT))
    if(localStorage.getItem(LS_SORT) == 'desc') {
        // newer first
        return new Date(later.createdAt).getTime() - new Date(former.createdAt).getTime()
        } else {
        // older first
        return new Date(former.createdAt).getTime() - new Date(later.createdAt).getTime()
        }
}

const renderNoteItems = async (e) => {    
    //console.log("EVENT TRIGGERED: render")
    let dateOptions = {day: 'numeric', month: 'long', year: 'numeric'}
    let notes = []
    const noteList = document.querySelector('notes-container')

    let isArchived = localStorage.getItem(LS_SCOPE)
    if(isArchived === "true") {
        notes = await getArchivedHandler()
    } else {
        notes = await getNotesHandler()
    }
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

const addNote = async (e) => {
    //console.log(`EVENT TRIGGERED: ${STORE_EVENT}`, e.detail)
    let {title, body} = e.detail

    let note = await addNoteHandler({title, body})
    if(note.id) {
        //console.log('ADD NOTE: success')
        document.dispatchEvent(new CustomEvent(RENDER_EVENT))
    } else {
        //console.log('ADD NOTE: failed')
        // TODO: add failed notification
    }
}

const archiveNote = async (e) => {
    // console.log(`EVENT TRIGGERED: ${ARCHIVE_EVENT}`, e.detail)
    let { id } = e.detail

    let isSuccess = await archiveNoteHandler(id)
    if(isSuccess) {
        document.dispatchEvent(new CustomEvent(RENDER_EVENT))
        
        console.log('ARCHIVE NOTE: success')
    } else {
        console.log('ARCHIVE NOTE: failed')
    }
}

const unarchiveNote = async (e) => {
    // console.log(`EVENT TRIGGERED: ${UNARCHIVE_EVENT}`, e.detail)
    let { id } = e.detail

    if( !id ) {
        // TODO Failed id not valid
        // console.log("ID Not Valid")
    }

    let isSuccess = await unarchiveNoteHandler(id)
    if(isSuccess) {
        document.dispatchEvent(new CustomEvent(RENDER_EVENT))
        
        console.log('UNARCHIVE NOTE: success')
    } else {
        console.log('UNARCHIVE NOTE: failed')
    }
}

const deleteNote = async (e) => {
    // console.log(`EVENT TRIGGERED: ${DELETE_EVENT}`, e.detail)
    let {id} = e.detail

    try {
        if( !id ) {
            throw new ClientError("Id tidak valid")
        }
    
        let isSuccess = await deleteNoteHandler(id)
        if(isSuccess) {
            document.dispatchEvent(new CustomEvent(RENDER_EVENT))
            
            console.log('DELETE NOTE: success')
        } else {
            console.log('DELETE NOTE: failed')
        }
    } catch(e) {
        //Swal.fire(e.getMessage(), 'error')
    }
}


document.addEventListener(RENDER_EVENT, renderNoteItems, false)
document.addEventListener(DELETE_EVENT, deleteNote, false)
document.addEventListener(STORE_EVENT, addNote, false)
document.addEventListener(ARCHIVE_EVENT, archiveNote, false)
document.addEventListener(UNARCHIVE_EVENT, unarchiveNote, false)


export { LS_SCOPE, LS_SORT, RENDER_EVENT, DELETE_EVENT, STORE_EVENT, ARCHIVE_EVENT, UNARCHIVE_EVENT, URL }