const serverResponse = () => {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle("Success resolve");
    }, 2000);
  });
};

const userRequest = async () => {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "Waiting...";

  try {
    const response = await serverResponse();
    resultContainer.innerHTML = response.toString();
  } catch (error) {
    console.log(error);
  }
};

userRequest();
