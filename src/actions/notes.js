import { db } from "../firebase/firebase-config.js";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { types } from "../components/types/types.js";
import { loadNotes } from "../helpers/loadNotes.js";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload.js";
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));

    }
}

//react-journalapp
export const activeNote = (id, note) => (
    {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
);
export const addNewNote = (id, note) => (
    {
        type: types.notesAddNew,
        payload: {
            id,
            ...note
        }
    }
);

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}



export const setNotes = (notes) => ({

    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const noteTofiresotre = { ...note };
        delete noteTofiresotre.id;
        await updateDoc(doc(db, `/${uid}/journal/notes/${note.id}`), noteTofiresotre);

        dispatch(refreshNote(note.id, note));
        Swal.fire('Saved!', 'Your note has been saved', 'success');


    }

}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({

            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        await deleteDoc(doc(db, `/${uid}/journal/notes/${id}`));
        dispatch(deleteNote(id));
        Swal.fire('Deleted!', 'Your note has been deleted', 'success');
    }

}
export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})