import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  text: String,
  content_type: Number,
  add_count: {
    type: Number,
    default: 0,
  },
  update_count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Data", dataSchema);
