import axios from "axios"

export const contactAPI = async (formdata) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/contact/create`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Swal.close();

    if (response?.data?.success) {
      Swal.fire({
        title: `Contact form submited successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });

      return true

    }
  } catch (error) {
    Swal.close();
    return false
  }
}