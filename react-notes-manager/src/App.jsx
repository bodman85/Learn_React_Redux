import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { setNoteList } from "store/notes/notes-slice";
import { NoteAPI } from "api/note-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withAuthRequired } from "hoc/withAuthRequired";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <ButtonPrimary
        className={s.buttonAdd}
        onClick={() => navigate("/note/new")}
      >
        +
      </ButtonPrimary>
      <Outlet />
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);
