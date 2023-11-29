import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { setNoteList } from "store/notes/notes-slice";
import { NoteAPI } from "api/note-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();

  async function fetchNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className={s.workspace}>
      <Header />
      <Outlet />
    </div>
  );
}
