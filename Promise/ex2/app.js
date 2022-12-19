const serverResponse = () => {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle("Success resolve");
    }, 2000);
  });
};

const userRequest = () => {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = 'Waiting...';

  return serverResponse().then((response) => {
    resultContainer.innerHTML = response
  })

}

userRequest().then(() => {
  console.log('Success')
})