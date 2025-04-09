
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const contactAPI = async (formdata) => {
  try {
    Swal.fire({
      title: "Submitting your inquiry...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await axios.post(
      `${BASE_URL}/contact/create`,
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    Swal.close();

    if (response?.data?.success) {
      Swal.fire({
        title: "Thank you!",
        text: "Your contact form has been submitted successfully. We'll get back to you soon!",
        icon: "success",
      });
      return true;
    } else {
      throw new Error("Unknown error occurred");
    }
  } catch (error) {
    Swal.close();
    console.error("Contact form submission error:", error);
    
    Swal.fire({
      title: "Something went wrong",
      text: error.response?.data?.message || "Unable to submit your inquiry. Please try again later or contact us directly.",
      icon: "error",
    });
    
    return false;
  }
};
