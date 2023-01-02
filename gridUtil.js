import { GRID_SIZE } from "./canvas.js";

let grid = [];
const size = GRID_SIZE;

const createGrid = () => {
  grid = [];
  for (let i = 0; i < size; i += 1) {
    const arr = [];
    for (let j = 0; j < size; j += 1) {
      arr.push(false);
    }
    grid.push(arr);
  }
};

export const setPos = ({ x, y }) => {
  grid[x][y] = true;
};

export const getPos = ({ x, y }) => {
  return grid[x][y];
};

export const clearGrid = () => {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      grid[i][j] = false;
    }
  }
};

createGrid();
