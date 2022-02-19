import earth from '../../../storage/models/earth.js';
import ctx from '../system/ctx.js';
import Matrix from '../../../lib/webgl-si/matrix.js';
import Translator from '../../../lib/webgl-si/translator.js';

const { createMatrices } = Matrix;
const { wareframe } = Translator;

const { gl, system, resize, reactor } = ctx;

const {
   setBufferData,
   enableVertexAttribArray,
   bindAttribPointer,
   bindBuffer,
   drawArrays,
   createBuffers,
   clear,
 } = system;

const buffers = {}, matrices = {};

const alpha = {
   lines: 3,
   dots: 1,
};

const earth1 = {
   deg: 0,
   axis: [0.0, 1.0, 0.0],
};

let _earth, earth_, model;

const kernel = [
   camera,
   lines,
   dots,
];

const mvp = {
   lookAt: [0, 3, 10, 0, 0, 0],
   translate: [0, 0.3, 0],
   distance: [10],
};

function setMVP(mat, aspect = 1.0) {
   mat.setPerspective(...mvp.distance, aspect, 1.0, 400.0);
   mat.translate(...mvp.translate);
   mat.lookAt(...mvp.lookAt, 0.0, 1.0, 0.0);
}; 

function generateMatrices() {
   const matrixNames = ['mvp'];
   createMatrices(matrices, matrixNames);
};

function generateBuffers() {
   const bufferNames = ['lines', 'dots'];
   createBuffers(buffers, bufferNames);
};

function attachBuffersData() {
   const length = model.length / 3;
   setBufferData(buffers.lines, model);
   setBufferData(buffers.dots, model);
   buffers.lines.n = length;
   buffers.dots.n = length;
};

function setProgramsVariables() {
   const earth = system.programs.earth;
   _earth = earth.uniforms; 
   earth_ = earth; 
};

function init() {
   model = wareframe(earth);
   generateMatrices();
   generateBuffers();
   attachBuffersData();
   setProgramsVariables();
   reactor.addKernel('earth', kernel);
};

function bindPositionBuffer(buffer, n = 3, index = 0) {
   bindBuffer(gl.ARRAY_BUFFER, buffer);
   bindAttribPointer(n, gl.FLOAT, 0, 0, index);
   enableVertexAttribArray(0);
};

function draw(n, type = gl.LINES) {
   drawArrays(type, 0, n);
};

function camera() {
   setMVP(matrices.mvp, resize.aspect);
   clear();
};

function lines() {
   rotate();
   earth_.use();
   bindPositionBuffer(buffers.lines);
   matrices.mvp.rotate(earth1.deg, ...earth1.axis);
   gl.uniformMatrix4fv(_earth.mvp, false, matrices.mvp.elements);
   gl.uniform1f(_earth.alpha, alpha.lines);
   gl.uniform1f(_earth.t, earth1.deg);
   draw(buffers.lines.n);
};

function dots() {
   earth_.use();
   bindPositionBuffer(buffers.dots);
   gl.uniform1f(_earth.alpha, alpha.dots);
   draw(buffers.dots.n, gl.POINTS);
};

function rotate() { earth1.deg -= 0.1 };

export { init, kernel };