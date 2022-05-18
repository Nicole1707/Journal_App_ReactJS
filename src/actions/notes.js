import { db } from "../firebase/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../components/types/types.js";
import { loadNotes } from "../helpers/loadNotes.js";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        // const doc = await db.collection(`${uid}/journal/notes`).add(newNote); Antigua v8
        //version 9

        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
       dispatch(activeNote(doc.id, newNote));
    }
}

export const activeNote =(id, note)=>(
    {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
)

export const startLoadingNotes = (uid) => {
    return async (dispatch)=>{
        const notes= await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}



export const setNotes =(notes)=>({

    type: types.notesLoad,
    payload: notes
});