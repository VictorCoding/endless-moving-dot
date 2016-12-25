function draw() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 200;
  canvas.height = 200;

  let posX = canvas.width / 2;
  let posY = canvas.height / 2;
  let goLeft = false;
  let goRight = true;

  setInterval(() => {
    const randomColor = `#${Math.random().toString(16).substr(-6)}`;
    
    if (posX === 188) {
      goLeft = true;
      goRight = false;
    } else if (posX === 0){
      goRight = true;
      goLeft = false;
    }

    if (goLeft) {
      posX -= 1;
    } else if (goRight) {
      posX += 1;
    }
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = randomColor;
    ctx.fill();
  }, 20);
  
  document.body.appendChild(canvas);
}

window.onload = draw;