import ctx from './ctx.js';
import Reactor from '../lib/js-client-helpers/reactor.js';

const 
   reactor = new Reactor(),
   { canvas } = ctx;

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