const earth = {
   vs: 
   `
      precision lowp float;

      attribute vec4 aPosition;
      uniform mat4 mvp;
      varying float vx;

      void main() {
         gl_PointSize = 1.4;
         vx = aPosition.x * 10.;
         vec4 nPos = mvp * aPosition;
         gl_Position = nPos;
      }
    `,
  fs: 
   `
      precision lowp float;

      uniform float alpha;
      uniform float t;
      varying float vx;

      void main() {
         float sin_t = sin(t * .01);
         float rate_r = 0.4 + .3 * sin_t;
         float rate_g = 0.4 + .3 * sin_t;
         float rate_b = 0.4 + .2 * sin_t;
         gl_FragColor = vec4(rate_r + vx, rate_g + vx, rate_b + vx, alpha);
      }
   `,
};

export default earth;