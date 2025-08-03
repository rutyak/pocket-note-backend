import Note from "../models/Note.js";

export const createNote = async (req, res, next) => {
  try {
    const { content, group } = req.body;


    if (!content || !group) {
      return res
        .status(400)
        .json({ message: "Please provide content and group name" });
    }

    const note = await Note.create({
      content,
      group,
      user: req.user._id,
    });

    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const { group } = req.query;

    const filter = { user: req.user._id };
    if (group) {
      filter.group = group; 
    }

    const notes = await Note.find(filter).sort({ createdAt: -1 });

    res.json(notes);
  } catch (error) {
    next(error);
  }
};
