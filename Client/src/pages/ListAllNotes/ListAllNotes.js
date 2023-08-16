import { useEffect, useState } from "react";
import { backEndAxiosInstance } from "../../Network/BackEnd";
import "./ListAllNotes.css"
  
function ListAllNotes() {
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    backEndAxiosInstance
      .get("/v1/notes/")
      .then((res) => {
        console.log("here res", res);
        setAllNotes([...res.data.data]);
      })
      .catch((err) => {
        console.log("here error", err);
        setAllNotes([
          {
            id: 1,
            title: "Error",
            createdAt: "0/0/0",
            content: "an error is happen try again later.",
          },
        ]);
      });
  }, []);

  // useEffect(() => {
  //   backEndAxiosInstance.post("/v1/notes/addNote", {
  //       title: "note1 7odaaaaaaa",
  //       content: "content note1 now",
  //     })
  //     .then((res) => {
  //       console.log("here res", res);
  //       setAllNotes([res.data.data]);
  //     })
  //     .catch((err) => {
  //       console.log("here error", err);
  //       setAllNotes([
  //         {
  //           id: 1,
  //           title: "Error",
  //           createdAt: "0/0/0",
  //           content: "an error is happen try again later.",
  //         },
  //       ]);
  //     });
  // }, []);
  
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center w-75 mt-5">
      {allNotes.map((note) => (
        <div key={note.id} className="note">
          <h2 className=" border-bottom border-1 border-dark ">{note.title}</h2>
          <p className="date d-inline">
            Created At : {new Date(note.createdAt).toLocaleString()}
          </p>
          <p className="date d-inline mx-3">
            Last Update : {new Date(note.updatedAt).toLocaleString()}
          </p>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ListAllNotes;
