import { useEffect, useState } from "react";
import { backEndAxiosInstance } from "../../Network/BackEnd";
import removeImg from "../../assets/Images/remove.png";
import exitImg from "../../assets/Images/exit.png";
import "./ListAllNotes.css";
import AddNewNote from "../AddNewNote/AddNewNote";

function ListAllNotes({ searchNoteTitle }) {
  const [allNotes, setAllNotes] = useState([]);
  const [hasServerError, setHasServerError] = useState(false);
   const [noteIsCreated, setNoteIsCreated] = useState(false);
  const [showNoteDetailsFlag, setShowNoteDetailsFlag] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    id: undefined,
    title: "",
    content: "",
    index:undefined,
  });
  
 

  useEffect(() => {
    console.log(searchNoteTitle);
    backEndAxiosInstance
      .get(
        searchNoteTitle
          ? `/v1/notes/search?search=${searchNoteTitle}`
          : "/v1/notes"
      )
      .then((res) => {
        setAllNotes([...res.data.data]);
      })
      .catch((err) => {
        setAllNotes([
          {
            error: true,
            title: "Error",
            createdAt: "0/0/0",
            content: "an error is happen try again later.",
          },
        ]);
      });
  }, [searchNoteTitle]);

  const showNoteDetails = (id,title, content ,index) => {
    setNoteDetails({ id, title, content, index });
    setShowNoteDetailsFlag(true);
  };

  const updateNote = (formData) => {
    backEndAxiosInstance
      .patch(`/v1/notes/${noteDetails.id}`, formData)
      .then((res) => {
        allNotes.splice(noteDetails.index,1,res.data.data);
        setAllNotes([...allNotes]);
        setNoteIsCreated(true);
        setTimeout(() => {
          setNoteIsCreated(false);
        }, 2500);
      })
      .catch((err) => {
        setHasServerError(true);
        setTimeout(() => {
          setHasServerError(false);
        }, 2500);
      });
  };
  const removeNote = (e, noteId, index) => {
    e.stopPropagation();
    backEndAxiosInstance
      .delete(`/v1/notes/${noteId}`)
      .then((res) => {
        allNotes.splice(index, 1);
        setAllNotes([...allNotes]);
      })
      .catch((err) => {
        setHasServerError(true);
        setTimeout(() => {
          setHasServerError(false);
        }, 2500);
      });
  };

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center w-75 mt-5">
      {allNotes.map((note, index) => (
        <div
          key={note._id}
          className="note"
          onClick={(e) => showNoteDetails(note._id, note.title, note.content ,index)}
        >
          <h2 className=" border-bottom border-1 border-dark ">{note.title}</h2>
          <p className="date d-inline">
            Created At : {new Date(note.createdAt).toLocaleString()}
          </p>
          <p className="date d-inline mx-3">
            Last Update : {new Date(note.updatedAt).toLocaleString()}
          </p>
          <p>{note.content}</p>
          {!note.error && (
            <img
              src={removeImg}
              alt="remove"
              className="removeImg"
              onClick={(e) => removeNote(e, note._id, index)}
            />
          )}
        </div>
      ))}
      <div className={hasServerError ? "notecreated" : "noteNotCreated"}>
        Try again leter
      </div>
      {showNoteDetailsFlag && (
        <div
          className="showNoteDetails"
          onClick={() => setShowNoteDetailsFlag(false)}
        >
          <img
            src={exitImg}
            alt="Exit"
            className="exitImg"
            onClick={() => setShowNoteDetailsFlag(false)}
          />
          <AddNewNote
            buttonText={"save"}
            title={noteDetails.title}
            content={noteDetails.content}
            submitHandler={updateNote}
            classes={"updateNoteForm"}
          />
        </div>
      )}
      <div className={noteIsCreated ? "notecreated" : "noteNotCreated"}>
        Note is updated
      </div>
    </div>
  );
}

export default ListAllNotes;
