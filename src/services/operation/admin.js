import { apiConnector } from "../apiConnector";
import { admin } from "../api";
import Swal from "sweetalert2";

const {
  CREATE_GALLERY,
  CREATE_VIDEO,

  IMAGE_UPLOAD,
  GET_ALL_GALLERY,
  GET_ALL_VIDEOS,
  DELETE_GALLERY,
  DELETE_GALLERY_IMAGE 
} = admin;

export const imageUpload = async (data, token) => {
  let result = [];
  const toastId = Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("thumbnail", data[i]);
    }

    const response = await apiConnector("POST", IMAGE_UPLOAD, formData, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Add Image Details");
    }

    Swal.fire({
      icon: "success",
      title: "Image Details Added Successfully",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    result = response?.data?.images;
  } catch (error) {
    console.log("CREATE IMAGE API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  } finally {
    Swal.close(toastId);
  }

  return result;
};

export const createGallery = async (data, token) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", CREATE_GALLERY, data);

    console.log("CREATE gallery API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Gallery Details");
    }

    Swal.fire({
      icon: "success",
      title: "Gallery Added Successfully",
    });
  } catch (error) {
    console.log("CREATE Gallery API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message,
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};

export const videoGalleryCreate = async (data, token) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", CREATE_VIDEO, data);

    console.log("CREATE gallery API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Gallery Details");
    }

    Swal.fire({
      icon: "success",
      title: "Gallery Added Successfully",
    });
  } catch (error) {
    console.log("CREATE Gallery API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message,
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};

export const getAllGalleryAPI = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_GALLERY);

    console.log("Gallery ............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Find Gallery");
    }

    result = response?.data?.gallerys;
    return result;
  } catch (error) {
    return false;
  }
};


export const getAllVideoAPI = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_VIDEOS);

    console.log("Gallery ............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Find Gallery");
    }

    result = response?.data?.gallerys;
    return result;
  } catch (error) {
    return false;
  }
};


export const deleteGalleryAPI = async (id) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Loading...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("DELETE", `${DELETE_GALLERY}/${id}`);

    console.log("Delete gallery API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Gallery Details");
    }

    Swal.fire({
      icon: "success",
      title: "Image Delete Successfully",
    });
  } catch (error) {
    console.log("CREATE Gallery API ERROR............", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message,
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};


export const deleteImageFromGallery = async (galleryId, publicId) => {
  let swalLoadingInstance;

  Swal.fire({
    title: "Deleting Image...",
    allowOutsideClick: false,
    didOpen: () => {
      swalLoadingInstance = Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("DELETE", DELETE_GALLERY_IMAGE, {
      galleryId,
      publicId
    });

    console.log("DELETE IMAGE API RESPONSE:", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Image");
    }

    Swal.fire({
      icon: "success",
      title: "Image Deleted Successfully",
    });

    return response.data; // Return response for further use
  } catch (error) {
    console.error("DELETE IMAGE API ERROR:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.response?.data?.message || "Something went wrong!",
    });
  } finally {
    if (swalLoadingInstance) {
      Swal.close();
    }
  }
};