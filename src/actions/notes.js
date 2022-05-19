import { db } from "../firebase/firebase-config.js";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { types } from "../components/types/types.js";
import { loadNotes } from "../helpers/loadNotes.js";
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
    }
}

export const activeNote = (id, note) => (
    {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
)

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

    }

}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note }
})