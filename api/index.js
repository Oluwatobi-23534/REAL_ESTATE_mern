import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user_route.js'
import authRouter from './routes/auth_route.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('Everything is connected!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is on the run on lane 3000')
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);