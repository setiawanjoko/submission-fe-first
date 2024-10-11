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
    //console.log("API CALL: Get Archive")
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
    return await fetch(`${URL}/notes`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    .then(response => {
        return response.json()
    })
    .then(responseJson => {
        if(responseJson.error) {
            console.log(responseJson)
        } else {
            return responseJson.data
        }
    })
    .catch((error) => {
        console.log(error)
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
const archiveNoteHandler = async (id) => {
    // console.log("API CALL: Archive Note", id)
    return await fetch(`${URL}/notes/${id}/archive`, {method: "POST"})
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        if(responseJson.status == "success") {
            return true
        } else {
            return false
        }
    })
    .catch((e) => {
        console.log(e.getMessage())
    })
}

// Mandatory 
const unarchiveNoteHandler = async (id) => {
    // console.log("API CALL: Unarchive Note", id)
    return await fetch(`${URL}/notes/${id}/unarchive`, {method: "POST"})
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        if(responseJson.status == "success") {
            return true
        } else {
            return false
        }
    })
    .catch((e) => {
        console.log(e.getMessage())
    })
}

// Mandatory
const deleteNoteHandler = async (id) => {
    // console.log("API CALL: Delete Note", id)
    return await fetch(`${URL}/notes/${id}`, {method: "DELETE"})
    .then((response) => {
        return response.json()
    })
    .then((responseJson) => {
        if(responseJson.status == "success") {
            return true
        } else {
            return false
        }
    })
    .catch((e) => {
        console.log(e.getMessage())
    })
}

export { getNotesHandler, getArchivedHandler, getNoteHandler, addNoteHandler, updateNoteHandler, archiveNoteHandler, unarchiveNoteHandler, deleteNoteHandler }