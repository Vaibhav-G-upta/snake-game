let inputDirection = {
  x: 0,
  y: 1,
};
let lastInpDir = { ...inputDirection };

window.addEventListener("keydown", ({ key }) => {
  const { x: prevX, y: prevY } = lastInpDir;
  if ((key === "ArrowUp" || key === "w") && prevX !== 0) {
    inputDirection = {
      x: 0,
      y: -1,
    };
  } else if ((key === "ArrowDown" || key === "s") && prevX !== 0) {
    inputDirection = {
      x: 0,
      y: 1,
    };
  } else if ((key === "ArrowLeft" || key === "a") && prevY !== 0) {
    inputDirection = {
      x: -1,
      y: 0,
    };
  } else if ((key === "ArrowRight" || key === "d") && prevY !== 0) {
    inputDirection = {
      x: 1,
      y: 0,
    };
  }
});

export const getInputDirection = () => {
  //  TODO: remove neck bite bug
  // const { x, y } = inputDirection;
  // if (x === 0 && head.x === neck.x) return lastInpDir;
  // if (y === 0 && head.y === neck.y) return lastInpDir;
  lastInpDir = inputDirection;
  return inputDirection;
};
