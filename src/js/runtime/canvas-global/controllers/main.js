import initPrograms from '../init/programs.js';
import initKernels from '../init/kernels.js';
import initResizeDependencies from '../init/resize.js';
import render from './render.js';

const canvasGlobal = {
   start,
};

function start() {
   render.start();
};

function stop() {

};

{
   initPrograms();
   initKernels();
   initResizeDependencies();
}

export default canvasGlobal;