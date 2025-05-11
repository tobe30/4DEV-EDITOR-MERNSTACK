import path from "path";
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import cookieParser from "cookie-parser";




const app = express()
dotenv.config()


// step 2: database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        throw error
    }
    
    };
    
    mongoose.connection.on("disconnected", () => {
        console.log("mongodb disconnected")
    })

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

//step 3
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(cookieParser());// step 4: cookie parser middleware
app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

// step 1: server setup
app.listen(PORT, () => {
    connect()
    console.log("Server is running on port 5000")
})