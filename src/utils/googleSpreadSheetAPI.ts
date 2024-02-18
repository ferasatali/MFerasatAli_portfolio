import axios from "axios";

// const Sheet =
//   "https://docs.google.com/spreadsheets/d/16WUWHMMk0rgzh6Kc9kLIykYQwm9hRpUR07DLQXRWSE4/edit#gid=0";

export const loadSheetsApi = async () => {
  const apiUrl = "https://script.google.com/macros/s/AKfycbxfmyi2wg2qhIN-FoIUnsX4gE8TjHDdrK_kzx5kcsbt-Ne0Gr21UhBSFXgw4SEPPXPv/exec"

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
