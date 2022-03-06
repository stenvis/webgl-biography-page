import earthModel from '../../../storage/models/earth.js';
import ctx from '../system/ctx.js';
import Matrix4 from '../../../lib/webgl-si/matrix.js';
import translator from '../../../lib/webgl-si/translator.js';
import shaders from '../../../shaders/custom/earth.js';

const 
   KEY = 'earth',
   ROTATE_ANGLE = .1,
   ROTATE_AXES = [.0, 1., .0];

let currentAngle = 0;

const presets = [
   'prepareState',
   'drawPoints',

   'rotate',
   'alpha',
   'multiplyMatrix',
]; 
const { gl, system, modeller, resize, kerneller, mvp } = ctx;
//wireframe in all import to one place (maybe to Model). 
const vertices = translator.wireframe(earthModel);

const MEarth = modeller.createModel(presets, vertices, shaders);
const { 
   prepareState,
   rotate,
   alpha,
   multiplyMatrix,
   drawPoints,
} = MEarth;

// new kernel clear.js
const { clear } = system;
//

const kernel = [
   clear,
   render,
];

const CEarth = kerneller.createController(KEY, kernel); 

void function setMVP() {
   mvp.lookAt = [0, 3, 10, 0, 0, 0];
   mvp.translate = [0, 0.3, 0];
   mvp.distance = [10];
}();

function render() {
   prepareState(),
   mvp.setMVP(resize.aspect);
   rotate(currentAngle -= ROTATE_ANGLE, ROTATE_AXES);
   alpha(3);
   multiplyMatrix(mvp.matrix);
   drawPoints();
};

export default CEarth;