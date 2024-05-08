export const loadSheetsApi = async (data: any) => {
  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyTKgVDJsxEyIxMk26CtrE5JapGxzS9GvLSUa53sH9Bsao2D2JfSqfZNsCVx3y6XTtW/exec";
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  } catch (error: any) {
    console.error("Error!", error.message);
  }
};
