import mongoose from "mongoose";
import express from 'express';

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const User = mongoose.model("users", schema);

const router = express.Router();

// יירוט בקשה עם ניתוב /users
// קבלת כל היוזרים
router.get("/", async (req, res) => {
    const data = await User.find();
    res.send(data);
});

// יירוט בקשה עם ניתוב /users/:userId
// קבלת יוזר אחד לפי מזהה
router.get("/:userId", async (req, res) => {
    const data = await User.findById(req.params.userId);
    res.send(data);
});

// הוספת יוזר
router.post("/", async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    const newUser = await user.save();
    res.send(newUser);
});

// מחיקת יוזר
router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.end();
});

export default router;