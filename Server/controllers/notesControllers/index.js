const { noteModel } = require("../../models");
const { tryCatchWrapper } = require("../../helpers")


const getAllNotes = (req, res, next) => {
  tryCatchWrapper(async () => {
    const allNotes = await noteModel.find();
    res.status(200).json({
      data: allNotes,
    });
  }, next);
}

const createNewNote = async (req, res, next) => {
  tryCatchWrapper(async () => {
    const { body: note } = req;
    const createdNote = await noteModel.create(note);
    res.status(201).json({
      data: createdNote,
    });
  }, next);
}

const getNoteById = async (req, res, next) => {
   tryCatchWrapper(async () => {
     const { id } = req.params;
     const note = await noteModel.findById(id);
     res.status(200).json({
       data: note || {},
     });
   }, next);
}
const getNoteByTitle = async (req, res, next) => {
  tryCatchWrapper(async () => {
    const { search } = req.query;
    const note = await noteModel.find({ title: search });
    res.status(200).json({
      data: note || {},
    });
  }, next);
};

const deleteNote = async (req, res, next) => {
   tryCatchWrapper(async () => {
     const { id } = req.params;
     const note = await noteModel.findByIdAndDelete(id);
     res.status(204).json({
       data: note,
     });
   }, next);


};

const updateNote = async (req, res, next) => {
   tryCatchWrapper(async () => {
     const {
       params: { id },
       body: newNoteData,
     } = req;
     const note = await noteModel.findByIdAndUpdate(id, newNoteData,{new:true});
     res.status(201).json({
       data: note,
     });
   },next);
};

module.exports = {
  getAllNotes,
  createNewNote,
  getNoteById,
  getNoteByTitle,
  deleteNote,
  updateNote,
};