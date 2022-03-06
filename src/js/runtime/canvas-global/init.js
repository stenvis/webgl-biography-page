import initKernels from './kernels.js';
import initResizeDependencies from './resize.js';

function initGlobalCanvas() {
   initKernels();
   initResizeDependencies();
}; 

export default initGlobalCanvas;