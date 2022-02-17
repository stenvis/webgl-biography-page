import ctx from '/webgl/js/runtime/canvas-global/system/ctx.js';
// import ctx from './ctx.js';
// import Reactor from '/webgl/js/lib/js-client-helpers/reactor.js';

// const 
//    reactor = new Reactor(),
const { canvas } = ctx;

let _rAF;

const render = {
   start,
   stop,
};

function start() {
   console.log('start!');
   tick();
}; 

function stop() {
   cancelAnimationFrame(_rAF);
};

function tick() {
   // scheduler.iterate();
   window.requestAnimationFrame(tick, canvas);
   // _raf = window.requestAnimationFrame(tick, canvas);
};

export default render;