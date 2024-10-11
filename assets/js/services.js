import { RENDER_EVENT, URL } from "./common.js"

const generateId = () => {
    return `notes-${new Date().now()}`
}

const generateCurrentTimeStamp = () => {
    return new Date().toISOString()
}

const getAllNotesHandler = () => {
    fetch(`${URL}/notes`)
    .then((response) => {
        response.json()
    })
    .then((responseJson) => {
        if(responseJson.error) {
            // TODO: show error message
        } else {
            let notes = responseJson.data
            document.dispatchEvent(new CustomEvent(RENDER_EVENT, {detail: {notes}}))
        }
    })
}

const getNoteHandler = (id) => {
    const notes = getAllNotesHandler()
    const index = notes.findIndex((note) => {
        return note.id == id
    })

    return notes[index]
}

const addNoteHandler = ({title, body}) => {
    const note = {
        id: generateId(),
        title: title,
        body: body,
        createdAt: generateCurrentTimeStamp(),
        archived: false
    }

    const notes = getAllNotesHandler()
    notes.push(note)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    return note.id
}

const updateNoteHandler = (id, {title, body, archived}) => {
    const notes = getAllNotesHandler()
    const index = notes.findIndex((note) => {
        return note.id == id
    })
    if(index == -1) {
        return -1
    }

    notes[index].title = title
    notes[index].body = body
    notes[index].archived = archived

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    return id
}

const deleteNoteHandler = (id) => {
    const notes = getAllNotesHandler()
    const index = notes.findIndex((note) => {
        return note.id == id
    })
    if(index == -1) {
        return false
    }

    notes.splice(index, 1)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    return true
}

export { getAllNotesHandler, getNoteHandler, addNoteHandler, updateNoteHandler, deleteNoteHandler }