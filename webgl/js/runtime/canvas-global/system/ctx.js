import GL from '/webgl/js/lib/webgl-si/gl.js';
import DOM from '/webgl/js/lib/js-client-helpers/dom.js';
import Resize from '/webgl/js/lib/js-client-helpers/resize.js';

const { GEBI, GCTX } = DOM;

const 
  CANV_NAME = "canvas",
  CTX = "webgl";

const attributes = {
  alpha: false,
  preserveDrawingBuffer: true,
  depth: true,
  stencil: false,
  antialias: true,
  premultipliedAlpha: false,
};

const 
  canvas = GEBI(CANV_NAME),
  gl = GCTX(canvas, CTX, attributes),
  system = new GL(gl),
  resize = new Resize(canvas);

const ctx = {
  canvas,
  gl,
  system,
  resize,
};

export default ctx;