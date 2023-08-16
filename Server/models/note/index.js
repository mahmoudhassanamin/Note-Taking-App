const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      minLength: 4,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
