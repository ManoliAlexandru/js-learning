const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", () => {
  parent.removeChild(child);
});