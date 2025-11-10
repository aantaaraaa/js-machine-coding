const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyBtn = document.querySelector('.hex-copy-color');

//Create random Hex Color
hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "#";

  for (let i = 0; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }

  hexColorValue.textContent = `${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `${hexColorOutput}`;
  hexBtn.style.color = `${hexColorOutput}`;
});

function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("Hex color is copied to clipboard.");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);


//RGB Color Generator
const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');

rgbBtn.addEventListener('click', () => {
    const r = getRedInputRange.value;
    const g = getGreenInputRange.value;
    const b = getBlueInputRange.value;
    
    rgbColorValue.textContent = `rgb(${r}, ${g}, ${b})`;
    rgbColorContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgbBtn.style.color = `rgb(${r}, ${g}, ${b})`;
});

function copyRGBColorToClipBoard() {
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert("RGB color is copied to clipboard.");
}

rgbCopyBtn.addEventListener("click", copyRGBColorToClipBoard);