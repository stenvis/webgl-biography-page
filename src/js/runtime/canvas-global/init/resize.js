import ctx from '../system/ctx.js';

const
   { resize, system } = ctx,
   { setViewPort } = system;

const VP = 'viewport';

function initResizeDependencies() {
   resize.addDependency(VP, () => { setViewPort(resize.width, resize.height); });
};

export default initResizeDependencies;