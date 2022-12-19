const orderedList = document.getElementById("orderedList");

const changeDocumentColor = (
  backgroundColor,
  secondBackgroundColor,
  timer,
  color = "black"
) => {
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = color;
  setTimeout(() => {
    document.body.style.backgroundColor = secondBackgroundColor;
  }, timer);
};
changeDocumentColor("red", "violet", 3000);

const changeColorBtn = document.getElementById("changeColor");

changeColorBtn.addEventListener("click", () => {
  changeDocumentColor("orange", "blue");
});

const renderElement = () => {
  let i = 1;
  let timer = setInterval(() => {
    orderedList.innerHTML += `<li>Элемент ${i}</li>`;
    i++;
    if(i > 20) {
        clearInterval(timer)
    };
  }, 2000);
};

renderElement();
