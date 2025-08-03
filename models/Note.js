import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please enter note content"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    group: {
      type: String,
      ref: "Group",
      required: true,  
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
