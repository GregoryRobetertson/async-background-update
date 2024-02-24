//* script.js

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function changeBackgroundColor() {
  const body = document.body;
  const colors = ["red", "blue", "green"];

  for (let i = 0; i < colors.length; i++) {
    body.style.backgroundColor = colors[i];
    await delay(5000); 
  }
}

changeBackgroundColor();
