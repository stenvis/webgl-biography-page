import GL from '../../../lib/webgl-si/gl.js';
import DOM from '../../../lib/js-client-helpers/dom.js';
import Resize from '../../../lib/js-client-helpers/resize.js';
import Reactor from '../../../lib/js-client-helpers/reactor.js';

const { GEBI, GCTX } = DOM;

const 
   CANVAS_ID = "canvas",
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
   canvas = GEBI(CANVAS_ID),
   gl = GCTX(canvas, CTX, attributes);

const
   resize = new Resize(canvas),
   system = new GL(gl),
   reactor = new Reactor();

const ctx = {
   canvas,
   gl,
   system,
   resize,
   reactor,
};

export default ctx;