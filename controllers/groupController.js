import Group from "../models/Group.js";

export const createGroup = async (req, res, next) => {
  try {
    const { initials, name, color } = req.body;

    if (!initials || !name) {
      return res
        .status(400)
        .json({ message: "Initials and name are required" });
    }

    const group = await Group.create({
      initials,
      name,
      color,
      user: req.user._id,
    });

    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};

export const getGroups = async (req, res, next) => {
  try {
    const groups = await Group.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(groups);
  } catch (error) {
    next(error);
  }
};
