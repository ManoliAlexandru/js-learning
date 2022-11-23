const field = document.querySelector("#field");
const ball = document.querySelector("#ball");

field.addEventListener("click", ({ target }) => {
  console.log(event)
  const ballHeight = target.clientHeight / 2 - target.firstElementChild.clientHeight / 2;
  const ballWidth = target.clientWidth / 2 - target.firstElementChild.clientWidth / 2;
  ball.style.top = `${ballHeight}px`;
  ball.style.left = `${ballWidth}px`;
});
