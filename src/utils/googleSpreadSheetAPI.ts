import axios from "axios";

const dataToPost = {
  name: "John Doe",
  email: "example@gmail.com",
  phone: "123-456-7890",
  message: "Hello, this is a sample message.",
} as any;

export const loadSheetsApi = async () => {
  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw4-QJWbzyvUmjWe0HVDpm2uU56UXIbdVSge7Uxpvxr3o4xN6QUrxQtXRmbvBJzSP0zaw/exec";
    const formData = new FormData();
    for (const key in dataToPost) {
      formData.append(key, dataToPost[key]);
    }
    console.log(formData, "formData");
    const response = await axios.post(scriptURL, formData,
      {
        headers: {
          'Content-Type': 'text/plain',
        }
      });
    console.log(response, "response");
    if (response.status === 200) {
      alert("Thank you! Your form is submitted successfully.");
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error: any) {
    console.error("Error!", error.message);
  }
};
