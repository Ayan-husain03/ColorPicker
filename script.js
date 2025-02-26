const colorInput = document.getElementById("colorInput");
const opacityInput = document.getElementById("opacityInput");
const box = document.querySelector(".box");
const colorValue = document.getElementById("colorValue");

function updateBoxColor() {
  const color = colorInput.value;
  const opacity = opacityInput.value;

  
  // Change the box background color and opacity
  box.style.backgroundColor = hexToRGBA(color, opacity);
  
  // Display the color and opacity value
  colorValue.textContent = `${hexToRGBA(color, opacity)}`;
}

// Function to convert hex color to rgba
function hexToRGBA(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

colorInput.addEventListener("input", updateBoxColor);
opacityInput.addEventListener("input", updateBoxColor);
