import ctx from '../system/ctx.js';
import earth from '../../../shaders/custom/earth.js';

const programs = {
   earth,
}; 

function initPrograms() {
   ctx.system.createPrograms(programs);
};

export default initPrograms;