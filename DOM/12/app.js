const table = document.getElementById("tbody");
const userInput = document.getElementById("mainInput");
const submit = document.getElementById("addButton");
const items = ["Пользователь", "Админ"];

const removeRow = (index) => {
  items.splice(index, 1);
};

const handleTableRow = (index) => {
  removeRow(index);
  render();
};

const render = () => {
  table.innerHTML = "";
  items.forEach((item, index) => {
    table.innerHTML += `
          <tr>
            <td>${item}</td>
            <td>
              <button onclick="handleTableRow(${index})">X</button>
            </td>
          </tr>
        `;
  });
};

const addListeners = () => {
  submit.addEventListener("click", (e) => {
    if (userInput.value.trim()) {
      items.push(userInput.value.trim());
    }
    render();
    userInput.value = "";
  });
};

addListeners();
render();
