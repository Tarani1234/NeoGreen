import Content from "../models/content.js";

// Fetch all sections
export const getSections = async (req, res) => {
  try {
    const sections = await Content.find({});
    res.json(sections);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update section
export const updateSection = async (req, res) => {
  const { section } = req.params;
  const { title, text, image } = req.body;

  try {
    const updated = await Content.findOneAndUpdate(
      { section },
      { title, text, image },
      { new: true, upsert: true } 
    );
    res.json({ message: "Section updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// add the content 
export const addContent = async (req, res) => {
  const { section, content } = req.body;
  console.log("addede content", req.body)
  try {
    const newContent = new Content({ section, content });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete content 
export const deleteContent = async (req, res) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.json({ message: "Content deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

