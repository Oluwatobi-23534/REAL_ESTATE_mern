import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user_route.js'
import authRouter from './routes/auth_route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
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

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is on the run on lane 3000')
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});