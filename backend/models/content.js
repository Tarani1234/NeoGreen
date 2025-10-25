import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  section: { type: String, required: true, unique: true }, // hero, about, product
  title: String,
  text: String,
  image: String, 
});

const Content = mongoose.model("Content", contentSchema);
export default Content;
