const minusBtn = document.getElementById("bt_minus");
const plusBtn = document.getElementById("bt_plus");
const quantityInput = document.getElementById("quantity");

const increment = delta => {
  let currentValue = Number(quantityInput.value);
  const maxValue = Number(quantityInput.max);
  if (currentValue + delta <= maxValue) {
    currentValue += delta;
  }
  quantityInput.value = currentValue;
};

const decrement = delta => {
  let currentValue = Number(quantityInput.value);
  const minValue = Number(quantityInput.min);
  if (currentValue - delta >= minValue) {
    currentValue -= delta;
  }
  quantityInput.value = currentValue;
};

const canIncrement = (value, delta, max) => {
  return Number(value) + Number(delta) <= Number(max);
};

const disableBtn = id => {
  document.getElementById(id).setAttribute("disabled", "true");
};

const observeIncrementButton = () => {
  if (!canIncrement(quantityInput.value, 1, quantityInput.max)) {
    disableBtn("bt_plus");
  }
};

observeIncrementButton();
minusBtn.addEventListener("click", () => {
  decrement(1);
});
plusBtn.addEventListener("click", () => {
  increment(1);
  observeIncrementButton();
});