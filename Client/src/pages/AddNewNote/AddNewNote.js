import "./AddNewNote.css";

function AddNewNote() {
  return (
    <>
      <form className="form">
        <h2 className="h2">Add New Note</h2>
        <div className="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Note's Title"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Note Content</label>
          <textarea
            className="form-control textArea"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your note"

          ></textarea>
        </div>
        <button type="submit" className="btn">Reset</button>
        <button type="submit" className="btn">Add Note</button>
      </form>
    </>
  );
}

export default AddNewNote
