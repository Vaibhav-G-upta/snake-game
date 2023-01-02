import { drawRect, clearBoard, GRID_SIZE } from "./canvas.js";
import { getInputDirection } from "./input.js";
import { clearGrid, getPos, setPos } from "./gridUtil.js";

export const SNAKE_SPEED = 5;
const defaultPos = Math.floor(GRID_SIZE / 2);
const colorPalette = ["#5fbbff", "#5566ff"];    //  head: 0, body: 1
const direction = { updX: 0, updY: 1 };
const snake = [
  { x: defaultPos, y: defaultPos },
  { x: defaultPos, y: defaultPos - 1 },
  { x: defaultPos, y: defaultPos - 2 },
];
let length = snake.length;

export const getScore = () => {
  return length - 3;
};

export const checkCollision = (pos) => {
  return getPos(pos);
};

export const growSnake = () => {
  const newTail = { ...snake[length - 1] };
  snake.push(newTail);
  length += 1;
};

export const updateDirection = () => {
  const { x, y } = getInputDirection();
  direction.updX = x;
  direction.updY = y;
};

export const updateSnake = () => {
  clearGrid();
  for (let i = length - 1; i > 0; i -= 1) {
    snake[i] = { ...snake[i - 1] };
    setPos({ ...snake[i] });
  }
  const { x, y } = snake[0];
  const { updX, updY } = direction;
  snake[0].y = (y + updY + GRID_SIZE) % GRID_SIZE;
  snake[0].x = (x + updX + GRID_SIZE) % GRID_SIZE;
  const collision = checkCollision({ ...snake[0] });
  setPos({ ...snake[0] });
  return collision;
};

export const drawSnake = () => {
  for (let i = 1; i < length; i += 1) {
    drawRect({ ...snake[i], color: colorPalette[1] });
  }
  drawRect({ ...snake[0], color: colorPalette[0] });
};
