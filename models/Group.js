import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    initials: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Group name is required"],
    },
    color: {
      type: String,
      default: "#4a6cf7",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Group", groupSchema);
