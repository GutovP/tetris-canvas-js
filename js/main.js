const canvas = document.getElementById('tetris-canvas');
const context = canvas.getContext('2d');

const requestAnimationFrame =
  window.requestAnimationFrame ||
  function (param) {
    setTimeout(param, 1000 / 60); // 60 FPS
  };

canvas.width = 800;
canvas.height = 600;

let x = 10;
let y = 10;

function update() {
  x += 1;
}
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(x, y, 10, 10);

  requestAnimationFrame(draw);
}

draw();
setInterval(update, 100);
