const express = require("express");
const mongoose = require("mongoose");

// חיבור למסד הנתונים
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/full-stack-W270225MR');
    console.log('mongodb connection');
}

main().catch(err => console.log(err));

// שימוש ב-Express
const app = express();

// הפעלת השרת ושימוש בפורט
app.listen(3000, () => {
    console.log("listening on port 3000");
});

// יירוט בקשה ללא ניתוב (דף הבית)
app.get('/', (req, res) => {
    res.send({
        message: "Hello world!",
    });
});

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const User = mongoose.model("users", schema);

// יירוט בקשה עם ניתוב /users
app.get("/users", async (req, res) => {
    const data = await User.find();
    res.send(data);
});