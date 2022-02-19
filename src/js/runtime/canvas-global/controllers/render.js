import ctx from '../system/ctx.js';

const { canvas, reactor } = ctx;

let _rAF;

const render = {
   start,
   stop,
};

function start() {
   tick();
}; 

function stop() {
   cancelAnimationFrame(_rAF);
};

function tick() {
   reactor.iterate();
   _rAF = window.requestAnimationFrame(tick, canvas);
};

export default render;