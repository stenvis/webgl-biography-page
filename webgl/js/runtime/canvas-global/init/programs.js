import ctx from '../system/ctx.js';
import earth from '../../../shaders/custom/earth.js';

const programsList = [
   earth,
];

function initPrograms() {
   ctx.system.createPrograms(programsList);
};

export default initPrograms;