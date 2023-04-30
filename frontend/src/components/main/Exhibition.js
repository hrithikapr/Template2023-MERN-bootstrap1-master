import React, { useRef, useEffect } from 'react';
import regl from 'regl';

const Exhibition = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reglInstance = regl({
      canvas: canvasRef.current,
      attributes: { antialias: true }
    });

    // Here you can use `reglInstance` to create a visualization
    // using the WebGL API. For example:
    const drawTriangle = reglInstance({
      frag: `
        precision mediump float;
        uniform vec4 color;
        void main () {
          gl_FragColor = color;
        }
      `,
      vert: `
        precision mediump float;
        attribute vec2 position;
        void main () {
          gl_Position = vec4(position, 0, 1);
        }
      `,
      attributes: {
        position: [[-1, 0], [0, -1], [1, 1]]
      },
      uniforms: {
        color: [1, 0, 0, 1]
      },
      count: 3
    });

    drawTriangle();

    return () => {
      reglInstance.destroy();
    };
  }, []);

  return (
    <canvas ref={canvasRef} width={400} height={400} />
  );
};

export default Exhibition;
