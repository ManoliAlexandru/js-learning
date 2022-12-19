const element = document.querySelector("#elem");

element.addEventListener("click", () => {
  const {offsetHeight, offsetWidth} = element;
  // const startWidth = element.offsetWidth;
  // const startHeight = element.offsetHeight;

  console.log(
    `height: ${getComputedStyle(element).height} / width: ${
      getComputedStyle(element).width
    }`
  );
  element.style.width = `${offsetWidth * 2}px`;
  element.style.height = `${offsetHeight * 2}px`;
});