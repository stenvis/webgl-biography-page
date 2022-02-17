import { programs, models } from '/webgl/js/storage/lake.js';
import { resize } from '/webgl/js/system/runtime/resize.js';
import { system } from '/webgl/js/system/runtime/system.js';
import { gl } from '/webgl/js/system/runtime/ctx.js';
import { Alpha } from '/webgl/js/lib/addons/opacity.js';

const {
   setMVP,
   setBufferData,
   enableVertexAttribArray,
   bindAttribPointer,
   bindBuffer,
   drawArrays,
   createMatrices,
   createBuffers,
 } = system;

const buffers = {}, matrices = {};

const alpha = {
   lines: 3,
   dots: 1,
};

const earth = {
   deg: 0,
   axis: [0.0, 1.0, 0.0],
};

let _earth, earth_;

const kernel = [
   camera,
   lines,
   dots,
];

function generateMatrices() {
   const matrixNames = ['mvp'];
   createMatrices(matrices, matrixNames);
};

function generateBuffers() {
   const bufferNames = ['lines', 'dots'];
   createBuffers(buffers, bufferNames);
};

function attachBuffersData() {
   const { scene0 } = models, length = scene0.length / 3;
   setBufferData(buffers.lines, scene0);
   setBufferData(buffers.dots, scene0);
   buffers.lines.n = length;
   buffers.dots.n = length;
};

function setProgramsVariables() {
   _earth = programs.earth.earth.uniforms; 
   earth_ = programs.earth.earth; 
};

function init() {
   generateMatrices();
   generateBuffers();
   attachBuffersData();
   setProgramsVariables();
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
};

function lines() {
   rotate();
   earth_.use();
   bindPositionBuffer(buffers.lines);
   matrices.mvp.rotate(earth.deg, ...earth.axis);
   gl.uniformMatrix4fv(_earth.mvp, false, matrices.mvp.elements);
   gl.uniform1f(_earth.alpha, alpha.lines * Alpha);
   gl.uniform1f(_earth.t, earth.deg);
   draw(buffers.lines.n);
};

function dots() {
   earth_.use();
   bindPositionBuffer(buffers.dots);
   gl.uniform1f(_earth.alpha, alpha.dots * Alpha);
   draw(buffers.dots.n, gl.POINTS);
};

function rotate() { earth.deg -= 0.1 };

export { init, kernel };