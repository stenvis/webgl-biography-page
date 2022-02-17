import ctx from '/webgl/js/runtime/canvas-global/system/ctx.js';
import earth from '/webgl/js/shaders/custom/earth.js';

const programsList = [
   earth,
];
;
function initPrograms() {
   ctx.system.createPrograms(programsList);
};

export default initPrograms;