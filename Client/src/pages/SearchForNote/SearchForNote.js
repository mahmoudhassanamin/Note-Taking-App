import { useLocation } from "react-router-dom";
import ListAllNotes from "../ListAllNotes/ListAllNotes";
import { useEffect, useState } from "react";

function SearchForNote() {

  // const [noteTitle, setNoteTitle] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // useEffect(() => {
  //   setNoteTitle(queryParams.get("search"));
  // }, []);
  let noteTitle = queryParams.get("search")

  return (
    <>
      <ListAllNotes searchNoteTitle={noteTitle} />
    </>
  );
}

export default SearchForNote;
