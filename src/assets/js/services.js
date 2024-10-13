import { URL } from "./common.js";
import { ClientError, ServerError } from "./exceptions.js";

/**
 * Alur services
 * /notes
 * [x]  [POST]   Add Note
 * [x]  [GET]    Get Notes
 * [x]  [GET]    Get Archived Notes
 * [x]  [GET]    Get Single Note
 * [x]  [POST]   Archive Note
 * [x]  [POST]   Unarchive Note
 * [x]  [DELETE] Delete Note
 */

// [POST]   Add Note
const addNoteHandler = async (note) => {
  return await fetch(`${URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "fail") {
        throw new ClientError(responseJson.message);
      } else {
        return responseJson;
      }
    })
    .catch((error) => {
      throw new ServerError(error.message);
    });
};

// [GET]    Get Notes
const getNotesHandler = async () => {
  let notes = [];
  notes = await fetch(`${URL}/notes`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "fail") {
        throw new ClientError(responseJson.message);
      } else {
        return responseJson;
      }
    })
    .catch((error) => {
      throw new ServerError(error.message);
    });

  return notes;
};

// [GET]    Get Archived Notes
const getArchivedHandler = async () => {
  let notes = [];
  notes = await fetch(`${URL}/notes/archived`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "fail") {
        throw new ClientError(responseJson.message);
      } else {
        return responseJson;
      }
    })
    .catch((error) => {
      throw new ServerError(error.message);
    });

  return notes;
};

// [GET]    Get Single Note
const getNoteHandler = async (id) => {
  return await fetch(`${URL}/notes/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "fail") {
        throw new ClientError(responseJson.message);
      } else {
        return responseJson;
      }
    })
    .catch((error) => {
      throw new ServerError(error.message);
    });
};

// [POST]   Archive Note
const archiveNoteHandler = async (id) => {
  return await fetch(`${URL}/notes/${id}/archive`, { method: "POST" })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "success") {
        return responseJson;
      } else {
        throw new ClientError(responseJson.message);
      }
    })
    .catch((e) => {
      throw new ServerError(e.message);
    });
};

// [POST]   Unarchive Note
const unarchiveNoteHandler = async (id) => {
  return await fetch(`${URL}/notes/${id}/unarchive`, { method: "POST" })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "success") {
        return responseJson;
      } else {
        throw new ClientError(responseJson.message);
      }
    })
    .catch((e) => {
      throw new ServerError(e.message);
    });
};

// [DELETE] Delete Note
const deleteNoteHandler = async (id) => {
  return await fetch(`${URL}/notes/${id}`, { method: "DELETE" })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.status == "success") {
        return responseJson;
      } else {
        throw new ClientError(responseJson.message);
      }
    })
    .catch((e) => {
      throw new ServerError(e.message);
    });
};

export {
  getNotesHandler,
  getArchivedHandler,
  getNoteHandler,
  addNoteHandler,
  archiveNoteHandler,
  unarchiveNoteHandler,
  deleteNoteHandler,
};
