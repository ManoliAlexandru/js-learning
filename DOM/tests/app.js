const mainInput = document.getElementById('mainInput');
const div = document.getElementById('div')
mainInput.oninput = () => {
  div.innerHTML = mainInput.value
}