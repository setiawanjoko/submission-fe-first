import Swal from "sweetalert2";
import {
  deleteNoteHandler,
  getNotesHandler,
  getArchivedHandler,
  addNoteHandler,
  archiveNoteHandler,
  unarchiveNoteHandler,
} from "./services.js";
import { ClientError, ServerError } from "./exceptions.js";

const URL = "https://notes-api.dicoding.dev/v2";
const LS_SORT = "sort";
const LS_SCOPE = "scope";
const RENDER_EVENT = "render_notes";
const STORE_EVENT = "store_note";
const ARCHIVE_EVENT = "archive_note";
const UNARCHIVE_EVENT = "unarchive_note";
const DELETE_EVENT = "delete_note";

const sorting = (former, later) => {
  if (localStorage.getItem(LS_SORT) == "desc") {
    // newer first
    return (
      new Date(later.createdAt).getTime() - new Date(former.createdAt).getTime()
    );
  } else {
    // older first
    return (
      new Date(former.createdAt).getTime() - new Date(later.createdAt).getTime()
    );
  }
};

const renderNoteItems = async (e) => {
  let dateOptions = { day: "numeric", month: "long", year: "numeric" };
  let notes = [];
  const noteList = document.querySelector("notes-container");

  let isArchived = localStorage.getItem(LS_SCOPE);
  try {
    if (isArchived === "true") {
      let { message, data } = await getArchivedHandler();
      notes = data;
    } else {
      let { message, data } = await getNotesHandler();
      notes = data;
    }
    notes.sort(sorting);
    noteList.innerHTML = "";
    notes.forEach((note) => {
      let noteItem = document.createElement("note-item");
      noteItem.setAttribute("notes-id", note.id);
      noteItem.setAttribute("notes-title", note.title);
      noteItem.setAttribute("notes-body", note.body);
      noteItem.setAttribute("notes-archived", note.archived);
      noteItem.setAttribute(
        "notes-created",
        new Date(note.createdAt).toLocaleDateString("en-UK", dateOptions)
      );

      noteList.appendChild(noteItem);
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const addNote = async (e) => {
  let { title, body } = e.detail;

  try {
    let { status, message, data } = await addNoteHandler({ title, body });
    if (data.id) {
      Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
      });
      document.dispatchEvent(new CustomEvent(RENDER_EVENT));
    } else {
      throw new ClientError(message);
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const archiveNote = async (e) => {
  let { id } = e.detail;

  try {
    let {status, message} = await archiveNoteHandler(id);
    if (status == "success") {
      Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
      });
      document.dispatchEvent(new CustomEvent(RENDER_EVENT));
    } else {
      throw new ServerError(message);
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const unarchiveNote = async (e) => {
  let { id } = e.detail;

  try {
    let {status, message} = await unarchiveNoteHandler(id);
    if (status == "success") {
      Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
      });
      document.dispatchEvent(new CustomEvent(RENDER_EVENT));
    } else {
      throw new ServerError(message);
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const deleteNote = async (e) => {
  let { id } = e.detail;

  try {
    if (!id) {
      throw new ClientError("Id tidak valid");
    }

    let {status, message} = await deleteNoteHandler(id);
    if (status == "success") {
      Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
      });
      document.dispatchEvent(new CustomEvent(RENDER_EVENT));
    } else {
      throw new ServerError(message);
    }
  } catch (e) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

document.addEventListener(RENDER_EVENT, renderNoteItems, false);
document.addEventListener(DELETE_EVENT, deleteNote, false);
document.addEventListener(STORE_EVENT, addNote, false);
document.addEventListener(ARCHIVE_EVENT, archiveNote, false);
document.addEventListener(UNARCHIVE_EVENT, unarchiveNote, false);

export {
  LS_SCOPE,
  LS_SORT,
  RENDER_EVENT,
  DELETE_EVENT,
  STORE_EVENT,
  ARCHIVE_EVENT,
  UNARCHIVE_EVENT,
  URL,
};
