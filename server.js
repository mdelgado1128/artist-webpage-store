import express from "express"
import dotenv from "dotenv"
import connectDB from "./backend/config/db.js"
import colors from "colors"
import { notFound, errorHandler } from "./backend/middleware/errorMiddleware.js"

import artWorkRoutes from "./backend/routes/artWorkRoutes.js"
import artWorkModels from "./backend/models/artWorkModel.js";

dotenv.config()
connectDB()

const app = express()
app.get("/", (req, res) => {
  res.send("Api is running")
})

app.use("/api/artWorks", artWorkRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(
    `Server running on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
))
