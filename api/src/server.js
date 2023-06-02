import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// MAIN APP
const app = express()
dotenv.config();

// DB Connect Function
const dbConnect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("MongoDB Connected!")
    } catch(error) {
        console.log(error);
    }
}
// END of DB Connect Function

// Helps Us Send JSON Data Using the Client-Side-- Also our Middleware
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());

// Routes Begins Here
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversations", conversationRoute);
// Routes Ends Here

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
})

app.listen(8800, () => {
    dbConnect();
    console.log("Backend server is runing!!!")
})