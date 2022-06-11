import express from "express"
const router = express.Router()
import {
    getArtWorks,
    getArtWorkById,
} from "../controllers/artWorkContoller.js"

router.route("/").get(getArtWorks)
router.route("/:id").get(getArtWorkById)

export default router
