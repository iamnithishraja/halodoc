import express from "express";
import { connectDatabse } from "./config/database";
import userRouter from "./routes/userRoutes";
import profileRouter from "./routes/profileRoutes";
import bodyParser from "body-parser";
import searchRouter from "./routes/searchRoutes";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRouter from "./routes/appoitmentRoutes";
import paymentRouter from "./routes/paymentRoutes";
import Razorpay from "razorpay";
import adminRouter from "./routes/adminRoutes";
import dashboardRouter from "./routes/dashboardRoutes";
import doctorRouter from "./routes/doctorRoutes";
import laboratoryRouter from "./routes/laboratoryRoutes";
import videoCallRouter from "./routes/videoCallRoutes";
import ratingRouter from "./routes/ratingRoutes";

import aiRouter from "./routes/aiRoutes";
dotenv.config();
const app = express();

connectDatabse();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(bodyParser.json({ limit: "35mb" }));

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEYID || "your-razorpay-keyid",
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use('/api/v1/', userRouter);
app.use('/api/v1/', profileRouter);
app.use('/api/v1/', searchRouter);
app.use('/api/v1/', appointmentRouter);
app.use('/api/v1/', paymentRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/user', dashboardRouter);
app.use('/api/v1/doctor', doctorRouter);
app.use('/api/v1/laboratory', laboratoryRouter);
app.use('/api/v1/video-call', videoCallRouter);
app.use('/api/v1/ratings', ratingRouter);

app.use('/api/v1/ai', aiRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});