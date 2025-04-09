const BASE_URL = import.meta.env.VITE_APP_BASE_URL
export const admin = {
    CREATE_GALLERY: BASE_URL + "/gallery/create",
    DELETE_GALLERY_IMAGE : BASE_URL + "/gallery/delete-single",
    CREATE_VIDEO: BASE_URL + "/gallery/create-videos",
    GET_ALL_GALLERY: BASE_URL + "/gallery/get",
    GET_ALL_VIDEOS: BASE_URL + "/gallery/get-video",
    DELETE_GALLERY: BASE_URL + "/gallery/delete",
    IMAGE_UPLOAD: BASE_URL + "/image/multi",

}