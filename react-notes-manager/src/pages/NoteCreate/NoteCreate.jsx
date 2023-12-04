import { NoteForm } from "components/NoteForm/NoteForm";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { addNote } from "store/notes/notes-slice";
import { useNavigate } from "react-router-dom";
import { withAuthRequired } from "hoc/withAuthRequired";


export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote));
    //alert("New Note was added:" + JSON.stringify(createdNote));
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}

export const ProtectedNoteCreate = withAuthRequired(NoteCreate);
