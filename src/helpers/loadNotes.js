import { db } from "../firebase/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

export const loadNotes = async (uid) => {
    // const noteSnap= await db.collection(`${uid}/journal/notes`).get();
    const noteSnap= await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = [];
    noteSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });
    
    return notes;

}