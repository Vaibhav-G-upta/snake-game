const gameBoard = document.querySelector("#game-board");
const pen = gameBoard.getContext("2d");
const border = 1.5;
const BOX_SIZE = 30;
export const GRID_SIZE = 20;
gameBoard.height = GRID_SIZE * BOX_SIZE;
gameBoard.width = GRID_SIZE * BOX_SIZE;
const { height, width } = gameBoard;

export const drawRect = ({ x, y, color = "#fcf" }) => {
  const stX = x * BOX_SIZE;
  const stY = y * BOX_SIZE;
  const side = BOX_SIZE - 2 * border;
  pen.fillStyle = color;
  pen.fillRect(stX + border, stY + border, side, side);
  //  TODO: find attractive border
  // pen.fillStyle = "black";
  // pen.fillRect(stX, stY, BOX_SIZE, BOX_SIZE);
};

export const clearBoard = () => {
  pen.clearRect(0, 0, width, height);
};
