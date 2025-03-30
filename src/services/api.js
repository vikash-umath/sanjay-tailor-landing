const BASE_URL = "http://localhost:8080/api/v1"
export const admin = {
    CREATE_GALLERY: BASE_URL + "/gallery/create",
    DELETE_GALLERY_IMAGE : BASE_URL + "/gallery/delete-single",
    CREATE_VIDEO: BASE_URL + "/gallery/create-videos",
    GET_ALL_GALLERY: BASE_URL + "/gallery/get",
    GET_ALL_VIDEOS: BASE_URL + "/gallery/get-video",
    DELETE_GALLERY: BASE_URL + "/gallery/delete",
    IMAGE_UPLOAD: BASE_URL + "/image/multi",

}