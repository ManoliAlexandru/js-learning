const ball = document.getElementById("ball");

document.addEventListener("dragover", e => {
  e.preventDefault();
});

document.addEventListener("drop", e => {
  console.log(e);
  ball.remove();
  const zone = document.getElementById(e.target.id);
  if (zone) {
    zone.appendChild(ball);
  }
});