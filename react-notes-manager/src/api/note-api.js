import {
  collection,
  doc,
  orderBy,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";

export class NoteAPI {
  static async create(formValues) {
    const response = await addDoc(
      collection(FirebaseApp.db, "notes"),
      formValues
    );
    return {
      id: response.id,
      ...formValues,
    };
  }

  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );
    const response = await getDocs(q);
    return response.docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  static async deleteById(id) {
    deleteDoc(doc(FirebaseApp.db, "notes", id));
  }

  static async updateById(id, values) {
    const query = doc(FirebaseApp.db, "notes", id);
    await updateDoc(query, values);
    return {
      id,
      ...values,
    };
  }
  static onShouldSyncNotes(onChange) {
    const q = query(collection(FirebaseApp.db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const isUserPerformingChange = querySnapshot.metadata.hasPendingWrites;
      if (!isUserPerformingChange) {
        console.log("You are not synced with the notes collection");
        onChange();
      }
    });
    return unsubscribe;
  }
}
