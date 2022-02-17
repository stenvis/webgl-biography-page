import initPrograms from '/webgl/js/runtime/canvas-global/init/programs.js';
import initKernels from '/webgl/js/runtime/canvas-global/init/kernels.js';

function initGlobalCanvas() {
   initPrograms();
   initKernels();
}; 

export default initGlobalCanvas;