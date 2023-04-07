import { isWithInRange } from "./lib";

export const updateClearColor = (
  gl: WebGL2RenderingContext,
  r: number,
  g: number,
  b: number,
  a: number
) => {
  if (
    !isWithInRange(r, 0, 1) ||
    !isWithInRange(g, 0, 1) ||
    !isWithInRange(b, 0, 1) ||
    !isWithInRange(a, 0, 1)
  ) {
    console.error(
      "[updateClearColor]: rgbaは0から1までの数値で指定してください"
    );
    return;
  }

  gl.clearColor(r, g, b, a);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(0, 0, 0, 0);
};

export const getColorClearValue = (gl: WebGL2RenderingContext) => {
  const color = gl.getParameter(gl.COLOR_CLEAR_VALUE) as Float32Array;
  return {
    r: color[0],
    g: color[1],
    b: color[2],
    a: color[3],
  };
};
