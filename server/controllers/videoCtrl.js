const galleryModel = require("../models/videoGallery")


const createVideoCtrl = async (req, res) => {
    try {
        const { title, type, images } = req.body;
        const imageArray = typeof images === 'string' ? JSON.parse(images) : images;

        if (!title || !type || !imageArray) {
            return res.status(400).json({
                success: false,
                message: "Please Provide All Fields"
            });
        }

        const gallery = await galleryModel.create({
            title, type, videos: imageArray
        });

        return res.status(201).json({
            success: true,
            message: "Video Gallery created successfully!",
            gallery
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating Video gallery"
        });
    }
}




const getAllVideoCtrl = async (req, res) => {
    try {
        const gallerys = await galleryModel.find({});
        
        return res.status(200).json({
            totalGallery: gallerys.length,
            success: true,
            gallerys,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all gallery"
        })
    }
}

const deleteGalleryCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await galleryModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Gallery Deleted successfully!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting gallery"
        })
    }
}
module.exports = { createVideoCtrl, getAllVideoCtrl, deleteGalleryCtrl }