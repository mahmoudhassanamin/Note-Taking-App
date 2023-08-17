const router = require("express").Router()
const { notesControllers } = require("../../../controllers")

router.post("/addNote", notesControllers.createNewNote);
router.get("/", notesControllers.getAllNotes);
router.get("/search", notesControllers.getNoteByTitle);
router.get("/:id", notesControllers.getNoteById);
router.patch("/:id", notesControllers.updateNote);
router.delete("/:id", notesControllers.deleteNote);

module.exports= router