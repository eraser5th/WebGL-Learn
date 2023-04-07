export const getCanvas = (
  document: Document,
  id: string
): HTMLCanvasElement => {
  const canvas = document.getElementById(id);

  if (!canvas) {
    throw new Error(`There is no canvas with id ${id} on this page.`);
  }

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(`${id} element is not a HTMLCanvasElement.`);
  }

  return canvas;
};

export const getWebGL2Context = (
  canvas: HTMLCanvasElement
): WebGL2RenderingContext => {
  const gl = canvas.getContext("webgl2");

  if (!gl) {
    throw new Error("webgl2コンテキストの取得に失敗しました");
  }

  return gl;
};
