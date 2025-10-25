import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  
}, { timestamps: true });

const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;
