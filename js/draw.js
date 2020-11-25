(function () {
  const canvas = document.getElementById('tetris-canvas');
  const context = canvas.getContext('2d');

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    function (param) {
      setTimeout(param, 1000 / 60); // 60 FPS
    };

  canvas.width = 800;
  canvas.height = 600;

  function drowGrid() {
    for (let i = 0; i <= TETRIS_ROWS; i += 1) {
      context.moveTo(0, TETRIS_CELL_SIZE * i);
      context.lineTo(TETRIS_COLS * TETRIS_CELL_SIZE, TETRIS_CELL_SIZE * i);
      context.stroke();
    }
    for (let i = 0; i <= TETRIS_COLS; i += 1) {
      context.moveTo(TETRIS_CELL_SIZE * i, 0);
      context.lineTo(TETRIS_CELL_SIZE * i, TETRIS_ROWS * TETRIS_CELL_SIZE);
      context.stroke();
    }
  }
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drowGrid();
    requestAnimationFrame(draw);
  }

  draw();
})();
