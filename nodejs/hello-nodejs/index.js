import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UsersRouter from './handlers/users.js';

// חיבור למסד הנתונים
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/full-stack-W270225MR');
    console.log('mongodb connection');
}

main().catch(err => console.log(err));

// שימוש ב-Express
const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
}));

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

app.use('/users', UsersRouter);