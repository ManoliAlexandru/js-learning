const element = document.querySelector("#elem");

element.addEventListener("click", () => {
  let startWidth = element.offsetWidth;
  let startHeight = element.offsetHeight;

  console.log(
    `height: ${getComputedStyle(element).height} / width: ${
      getComputedStyle(element).width
    }`
  );
  element.style.width = `${startWidth * 2}px`;
  element.style.height = `${startHeight * 2}px`;
});