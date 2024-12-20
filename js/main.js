// Function  that generates a valid hexademical color (from #000000 to #FFFFFF)
function getRandomColor() {
  // 1. Generate a random number between 0 and 1
  let randomNumber = Math.random();

  // 2. Scale the random number to a range between 0 and 16777215
  randomNumber = randomNumber * 16777215;

  // 3. Round the number down to the nearest whole integer
  randomNumber = Math.floor(randomNumber);

  // 4. Convert the integer to its hexadecimal representation
  let hexColor = randomNumber.toString(16);

  // 5. Add the "#" symbol to the beginning of the hexadecimal string
  hexColor = "#" + hexColor;

  // Return the generated color code
  return hexColor;
}

console.log(getRandomColor());

// add an event listener to the button that changes the color of the color-box and value of the p
document.querySelector("button").addEventListener("click", function () {
  let color = getRandomColor();
  document.querySelector(".color-box").style.backgroundColor = color;
  document.querySelector("p").textContent = color;
});
