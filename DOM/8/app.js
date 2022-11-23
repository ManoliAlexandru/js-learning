const input = document.querySelector("#mainInput");
const container = document.querySelector("#container");

input.addEventListener("blur", () => {
  const parsed = Number(input.value);
  if (isNaN(parsed)) {
    input.value = "";
  } else {
    container.innerText = parsed.toString();
  }
});