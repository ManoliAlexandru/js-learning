let colors = ["white", "blue", "yellow", "black", "red", "green"];
let [firstColor, secondColor, ...otherColor] = colors
console.log(firstColor);
console.log(secondColor);
console.log(otherColor.join(' '));