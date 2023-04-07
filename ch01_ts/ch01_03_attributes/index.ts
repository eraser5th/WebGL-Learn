import { getCanvas, getWebGL2Context } from "../../common/ts/dom";
import { getColorClearValue, updateClearColor } from "../../common/ts/webgl";

const checkKey = (gl: WebGL2RenderingContext) => (event: KeyboardEvent) => {
  switch (event.key) {
    case "1": {
      updateClearColor(gl, 0.2, 0.8, 0.2, 1.0); // green
      break;
    }
    case "2": {
      updateClearColor(gl, 0.2, 0.2, 0.8, 1.0); // blue
      break;
    }
    case "3": {
      updateClearColor(gl, Math.random(), Math.random(), Math.random(), 1.0); // green
      break;
    }
    case "4": {
      const color = getColorClearValue(gl);
      alert(`clearColor = (
        ${color.r.toFixed(1)}
        ${color.g.toFixed(1)}
        ${color.b.toFixed(1)}
      )`);

      window.focus();
      break;
    }
  }
};

const init = () => {
  const canvas = getCanvas(document, "webgl-canvas");
  const gl = getWebGL2Context(canvas);
  window.onkeydown = checkKey(gl);
};

window.onload = init;
