import initPrograms from './programs.js';
import initKernels from './kernels.js';

function initGlobalCanvas() {
   initPrograms();
   initKernels();
}; 

export default initGlobalCanvas;