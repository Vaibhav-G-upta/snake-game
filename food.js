import { drawRect, GRID_SIZE } from "./canvas.js";
import { growSnake, checkCollision } from "./snake.js";

const initPos = Math.floor(GRID_SIZE / 3);
const pos = { x: initPos, y: initPos, color: "red" };

const getRandom = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getNewFood = (range) => {
  let x = getRandom(range),
    y = getRandom(range);
  while (checkCollision({ x, y })) {
    x = getRandom(range);
    y = getRandom(range);
  }
  pos.x = x;
  pos.y = y;
};

export const updateFood = () => {
  const flag = checkCollision({ ...pos });
  if (flag) {
    getNewFood({ min: 2, max: GRID_SIZE - 2 });
    growSnake();
  }
};

export const drawFood = () => {
  drawRect(pos);
};
