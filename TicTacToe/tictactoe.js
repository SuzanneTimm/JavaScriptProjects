let activePlayer = "x";
let selectedSquares = [];

function placeXOrO(squareNumber) {
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    let select = document.getElementById(squareNumber);
    if (activePlayer === "x") {
      select.style.backgroundImage = "url('images/x.png')";
    } else {
      select.style.backgroundImage = "url('images/o.png')";
    }
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();
    if (activePlayer === "x") {
      activePlayer = "o";
    } else {
      activePlayer = "x";
    }
    audio("media/place.mp3");
    if (activePlayer === "o") {
      disableClick();
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    return true;
  }
}

function computersTurn() {
  let success = false;
  let pickASquare;
  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9));

    if (placeXOrO(pickASquare)) {
      {
        placeXOrO(pickASquare);
        success = true;
      }
    }
  }
}

function checkWinConditions() {
  if (arrayIncludes("Ox, 1x, 2x")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3x", "4x", "5x")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6x", "7x", "8x")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0x", "3x", "6x")) {
    drawWinLine(100, 50, 558, 558);
  } else if (arrayIncludes("1x", "4x", "7x")) {
    drawWinLine(304, 50, 100, 558);
  } else if (arrayIncludes("2x", "5x", "8x")) {
    drawWinLine(508, 50, 304, 558);
  } else if (arrayIncludes("6x", "4x", "2x")) {
    drawWinLine(100, 508, 508, 90);
  } else if (arrayIncludes("0x", "4x", "8x")) {
    drawWinLine(100, 100, 510, 520);
  } else if (arrayIncludes("0o", "1o", "2o")) {
    drawWinLine(50, 100, 520, 100);
  } else if (arrayIncludes("3o", "4o", "5o")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6o", "7o", "8o")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0o", "3o", "6o")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1o", "4o", "7o")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("2o", "5o", "8o")) {
    drawWinLine(508, 50, 508, 558);
  } else if (arrayIncludes("6o", "4o", "2o")) {
    drawWinLine(100, 508, 510, 90);
  } else if (arrayIncludes("0o", "4o", "2o")) {
    drawWinLine(100, 100, 520, 520);
  } else if (selectedSquares.length >= 9) {
    audio("media/tie.mp3");
    setTimeout(function () {
      resetGame();
    }, 1000);
  }
}

function arrayIncludes(squareA, squareB, squareC) {
  const a = selectedSquares.includes(squareA);
  const b = selectedSquares.includes(squareB);
  const c = selectedSquares.includes(squareC);
  if (a === true && b === true && c === true) {
    return true;
  }
}

function disableClick() {
  body.style.pointerEvents = "none";
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

function audio(audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}

function drawWinLine(coordx1, coordy1, coordx2, coordy2) {
  const canvas = document.getElementById("win-lines");
  const c = canvas.getContext("2d");
  let x1 = coordx1,
    y1 = coordy1,
    x2 = coordx2,
    y2 = coordy2,
    x = x1,
    y = y1;

  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = "rgba(70, 255, 33, 0.8)";
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y < y2) {
        y += 10;
      }
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }

      if (x1 <= x2 && y1 >= y2) {
        if (x < x2) {
          x += 10;
        }
        if (y > y2) {
          y -= 10;
        }
        if (x >= x2 && y <= y2) {
          cancelAnimationFrame(animationLoop);
        }
      }
    }
  }

  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
  }

  disableClick();
  audio("media/winGame.mp3");
  animateLineDrawing();

  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}

function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = "";
    selectedSquares = [];
  }
}
