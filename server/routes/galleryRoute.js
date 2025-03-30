const express = require("express")
const { createGalleryCtrl, getAllGalleryCtrl, deleteGalleryCtrl, deleteSingleImageCtrl } = require("../controllers/galleryCtrl")
const { createVideoCtrl, getAllVideoCtrl } = require("../controllers/videoCtrl")
const router = express.Router()


router.post("/create", createGalleryCtrl)
router.post("/create-videos", createVideoCtrl)
router.get("/get", getAllGalleryCtrl)
router.get("/get-video", getAllVideoCtrl)
router.delete("/delete/:id", deleteGalleryCtrl)
router.delete("/delete-single", deleteSingleImageCtrl)



module.exports = router


