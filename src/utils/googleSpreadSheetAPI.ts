import axios from "axios";

// const Sheet =
//   "https://docs.google.com/spreadsheets/d/16WUWHMMk0rgzh6Kc9kLIykYQwm9hRpUR07DLQXRWSE4/edit#gid=0";

export const loadSheetsApi = async () => {
  const apiUrl = "https://script.google.com/macros/s/AKfycbyhqh9I5yQBRoIouFSfzH1iLh1Hl9P_-O7voHwiGLSApPpDgA_vgh3fxXtBzaAf8VT8Ew/exec"

  const data = {
    name: "John Doe",
    email: "ferasatali14@gmail.com",
    phone: "123-456-7890",
    message: "Hello, this is a sample message.",
  };

  axios
    .post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Data posted successfully:", response);
    })
    .catch((error) => {
      console.error("Error posting data:", error);
    });
};
