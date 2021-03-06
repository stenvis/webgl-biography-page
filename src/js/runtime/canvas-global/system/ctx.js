import GL from '../../../lib/webgl-si/gl.js';
import MVP from '../../../lib/webgl-si/camera/mvp.js';
import Modeller from '../../../lib/webgl-si/modeller.js';
import DOM from '../../../lib/js-client-helpers/dom.js';
import Resize from '../../../lib/js-client-helpers/resize.js';
import Reactor from '../../../lib/js-client-helpers/reactor/reactor.js';
import Kerneller from '../../../lib/js-client-helpers/reactor/kerneller.js';

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
   modeller = new Modeller(system),
   reactor = new Reactor(),
   kerneller = new Kerneller(reactor),
   mvp = new MVP();

const ctx = {
   canvas,
   gl,
   system,
   modeller,
   resize,
   reactor,
   kerneller,
   mvp,
};

export default ctx;