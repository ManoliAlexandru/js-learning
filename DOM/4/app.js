const mainInfoInput = document.querySelector("#input");
const inputValue = mainInfoInput.value;
const infoContainer = document.querySelector("#infoList");
const addButton = document.querySelector("#addButton");
const infoStorage = [];

const addItem = () => {
  infoStorage.push({
    name: mainInfoInput.value,
  });
};
const deleteItem = (position) => {
  infoStorage.splice(position, 1);
};

const deleteBtnClick = (position) => {
  deleteItem(position);
  renderItems();
};

const renderItems = () => {
  infoContainer.innerHTML = "";

  infoStorage.forEach((item, index) => {
    infoContainer.innerHTML += `<li><span>${item.name}</span> <button onclick="deleteBtnClick(${index})">x</button></li>`;
    mainInfoInput.value = "";
  });
};

addButton.addEventListener("click", () => {
  addItem();
  renderItems();
});
