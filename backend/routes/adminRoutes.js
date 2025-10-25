import express from "express";
import { registerAdmin, loginAdmin, verifyToken, logoutAdmin } from "../controllers/adminControllers.js"
import { updateSection,  getSections, addContent, deleteContent } from "../controllers/contentController.js";

const router = express.Router();

router.post("/register", registerAdmin); 
router.post("/login", loginAdmin);
router.post('/logout', logoutAdmin)

// get a section 
router.get('/', verifyToken, getSections)

// update a section by name
 router.put("/:section", verifyToken, updateSection)

 // add a section
 router.post('/content', addContent)
// protected route

// delete content section
router.delete("/:id", deleteContent);


router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome Admin ${req.admin.username}` });
});

export default router;
