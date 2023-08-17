import "./AddNewNote.css";
import { useFormik } from "formik";
import { backEndAxiosInstance } from "../../Network/BackEnd";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object({
  title: Yup.string()
    .required("title is required")
    .min(5, "minimum length is 5 charecters")
    .max(20, "maximum length is 20 charecters"),
  content: Yup.string().required("note's content is required"),
});

function AddNewNote({ title, content, buttonText, submitHandler, classes }) {
  const [noteIsCreated, setNoteIsCreated] = useState(false);
  const [hasServerError, setHasServerError] = useState(false);

  const initialValues = {
    title: title || "",
    content: content || "",
  };

  const submitNoteDate = (formData) => {
    backEndAxiosInstance
      .post("/v1/notes/addNote", formData)
      .then((res) => {
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

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler || submitNoteDate,
    validationSchema,
  });

  const resetHandler = () => {
    formik.values.title = "";
    formik.values.content = "";
  };

  return (
    <>
      <form className={"form " + classes} onSubmit={formik.handleSubmit} onClick={e=>e.stopPropagation()}>
        <h2 className="h2">Add New Note</h2>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter your note's title"
            {...formik.getFieldProps("title")}
          />
          {formik.errors.title && formik.touched.title && (
            <p className="text-danger">{formik.errors.title}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Content">Note Content</label>
          <textarea
            className="form-control textArea"
            id="Content"
            rows="10"
            placeholder="Enter your note"
            {...formik.getFieldProps("content")}
          ></textarea>
          {formik.errors.content && formik.touched.content && (
            <p className="text-danger">{formik.errors.content}</p>
          )}
        </div>
        <button type="submit" className="btn" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="btn">
          {buttonText || "Add Note"}
        </button>
      </form>
      <div className={noteIsCreated ? "notecreated" : "noteNotCreated"}>
        Note is created
      </div>
      <div className={hasServerError ? "notecreated" : "noteNotCreated"}>
        Try again leter
      </div>
    </>
  );
}

export default AddNewNote;
