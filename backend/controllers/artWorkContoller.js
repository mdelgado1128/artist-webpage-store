import asyncHandler from "express-async-handler"
import ArtWork from "../models/artWorkModel.js"

//**@desc Fetch all artWorks
//**@route Get /api/artWorks
//**@access Public

const getArtWorks = asyncHandler(async (req, res) => {
    const artWorks = await ArtWork.find({})

    res.json(artWorks)
})

//**@desc Fetch single artWorks
//**@route Get /api/artWorks/:id
//**@access Public

const getArtWorkById = asyncHandler(async (req, res) => {
    const artWork = await ArtWork.findById(req.params.id)
    res.json(artWork)
    if (artWork) {
        res.json(artWork)
    } else {
        res.status(404)
        throw new Error("artWorks not found")
    }
})

export { getArtWorkById, getArtWorks }
