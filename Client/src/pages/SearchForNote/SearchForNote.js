import { useLocation } from "react-router-dom";
import ListAllNotes from "../ListAllNotes/ListAllNotes";

function SearchForNote() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const noteTitle = queryParams.get("search");
    // console.log(noteTitle);
    return (
      <>
        <ListAllNotes searchNoteTitle={noteTitle} />
      </>
    );
}

export default SearchForNote;
