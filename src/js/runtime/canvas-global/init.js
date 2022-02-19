import initPrograms from './programs.js';
import initKernels from './kernels.js';
import initResizeDependencies from './resize.js';

function initGlobalCanvas() {
   initPrograms();
   initKernels();
   initResizeDependencies();
}; 

export default initGlobalCanvas;