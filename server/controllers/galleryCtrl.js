const galleryModel = require("../models/gallery")

const createGalleryCtrl = async (req, res) => {
    try {
        const { title, category, images,description } = req.body;
        const imageArray = typeof images === 'string' ? JSON.parse(images) : images;

        if (!title || !category || !imageArray) {
            return res.status(400).json({
                success: false,
                message: "Please Provide All Fields"
            });
        }

        const gallery = await galleryModel.create({
            title, type:category, images: imageArray,description
        });

        return res.status(201).json({
            success: true,
            message: "Gallery created successfully!",
            gallery
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating gallery"
        });
    }
}




const getAllGalleryCtrl = async (req, res) => {
    try {
        const gallerys = await galleryModel.find({});
console.log(gallerys)

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


const cloudinary = require("cloudinary").v2; // Cloudinary Import करें

const deleteSingleImageCtrl = async (req, res) => {
    try {
        const { galleryId, publicId } = req.body;
console.log(req.body)
        // Validate Input
        if (!galleryId || !publicId) {
            return res.status(400).json({ success: false, message: "Gallery ID and Public ID are required" });
        }

        // Find the gallery
        const gallery = await galleryModel.findById(galleryId);
        if (!gallery) {
            return res.status(404).json({ success: false, message: "Gallery not found" });
        }

        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // Remove image from gallery's images array
        const updatedImages = gallery.images.filter(img => img.public_id !== publicId);

        if (updatedImages.length === 0) {
            // If no images left, delete the entire gallery
            await galleryModel.findByIdAndDelete(galleryId);
            return res.status(200).json({
                success: true,
                message: "Image deleted and gallery removed as no images left!"
            });
        } else {
            // Otherwise, update the gallery with remaining images
            gallery.images = updatedImages;
            await gallery.save();
            return res.status(200).json({
                success: true,
                message: "Image deleted successfully",
                gallery
            });
        }
    } catch (error) {
        console.error("Error deleting image:", error);
        return res.status(500).json({
            success: false,
            message: "Error in deleting image"
        });
    }
};



module.exports = { createGalleryCtrl, getAllGalleryCtrl, deleteGalleryCtrl ,deleteSingleImageCtrl}