const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        videos: [
            {
                public_id: String,
                url: String,
            },
        ],
        type: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);



module.exports = mongoose.model("Videos", videoSchema); 
