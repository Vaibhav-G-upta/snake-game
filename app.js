import { clearBoard } from "./canvas.js";
import { clearGrid } from "./gridUtil.js";
import { updateFood, drawFood } from "./food.js";
import {
  SNAKE_SPEED,
  updateSnake,
  drawSnake,
  updateDirection,
  getScore,
} from "./snake.js";

let prevTimeStamp = 0;
let gameOver = false;

const scoreBoard = document.querySelector("#score-board");

const showMessage = (message) => {
  //  TODO: game over message
};

const msToSec = (milliseconds) => {
  return milliseconds / 1000;
};

const update = () => {
  gameOver = updateSnake();
  updateFood();
  scoreBoard.innerHTML = getScore();
};

const draw = () => {
  clearBoard();
  drawSnake();
  drawFood();
};

const main = (currTimeStamp) => {
  if (gameOver) {
    showMessage("GAME OVER!!");
    return;
  }
  window.requestAnimationFrame(main);
  updateDirection();
  const timeDiff = msToSec(currTimeStamp - prevTimeStamp);
  if (timeDiff < 1 / SNAKE_SPEED) {
    return;
  }
  prevTimeStamp = currTimeStamp;
  update();
  draw();
};

clearGrid();
window.requestAnimationFrame(main);
