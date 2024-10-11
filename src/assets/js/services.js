import { URL } from "./common.js"

const generateId = () => {
    return `notes-${new Date().now()}`
}

const generateCurrentTimeStamp = () => {
    return new Date().toISOString()
}

// Mandatory
const getNotesHandler = async () => {
    //console.log("API CALL: Notes")
    let notes = []
    notes = await fetch(`${URL}/notes`)
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        if(responseJson.error) {
            console.log(responseJson)
        } else {
            return responseJson.data
        }
    })
    .catch((error) => {
        console.log(error)
    })
    
    return notes
}

// Mandatory
const getArchivedHandler = async () => {
    //console.log("API CALL: Archive")
    let notes = []
    notes = await fetch(`${URL}/notes/archived`)
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        if(responseJson.error) {
            console.log(responseJson)
        } else {
            return responseJson.data
        }
    })
    .catch((error) => {
        console.log(error)
    })
    
    return notes
}

// Optional
const getNoteHandler = (id) => {
    const notes = getAllNotesHandler()
    const index = notes.findIndex((note) => {
        return note.id == id
    })

    return notes[index]
}

// Mandatory
const addNoteHandler = async (note) => {
    await fetch(`${url}/notes`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notes)
    })
    .then(response => {
        
    })
}

// Optional
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

// Mandatory
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

// Optional
const setArchiveHandler = (id) => {
}

export { getNotesHandler, getArchivedHandler, getNoteHandler, addNoteHandler, updateNoteHandler, deleteNoteHandler }