const input = document.querySelector("#mainInput");
const container = document.querySelector("#container");

input.addEventListener("blur", () => {
  if (isNaN(Number(input.value))) {
    input.value = "";
  } else {
    container.innerText = input.value;
  }
});
