import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";



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

//step 3
app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/project", projectRoutes)


// step 1: server setup
app.listen(PORT, () => {
    connect()
    console.log("Server is running on port 5000")
})