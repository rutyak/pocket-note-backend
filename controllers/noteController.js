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
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const filter = {
      group: { $regex: new RegExp(`^\\s*${group}\\s*$`, "i") },
      user: req.user._id,
    };

    const notes = await Note.find(filter);

    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    next(error);
  }
};
