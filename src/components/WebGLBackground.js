import React, { useEffect, useRef } from 'react';
import './WebGLBackground.css';

const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true });
    if (!gl) {
      canvas.style.display = 'none';
      return undefined;
    }

    const vertexSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453123);
      }

      float sdSegment(vec2 p, vec2 a, vec2 b) {
        vec2 pa = p - a;
        vec2 ba = b - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * h);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        float scale = 6.0;
        vec2 gv = uv * scale;
        vec2 cell = floor(gv);
        vec2 local = fract(gv);

        float t = u_time * 0.4;
        vec2 nearestPoint = vec2(0.0);
        float nearestDist = 10.0;

        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 cellPos = cell + offset;
            vec2 rand = hash(cellPos);
            vec2 point = cellPos + 0.5 + 0.35 * sin(t + rand * 6.2831);
            float d = length(gv - point);
            if (d < nearestDist) {
              nearestDist = d;
              nearestPoint = point;
            }
          }
        }

        float lineIntensity = 0.0;
        float pointIntensity = smoothstep(0.08, 0.0, nearestDist);

        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 cellPos = cell + offset;
            vec2 rand = hash(cellPos);
            vec2 point = cellPos + 0.5 + 0.35 * sin(t + rand * 6.2831);

            float linkDist = length(nearestPoint - point);
            if (linkDist > 0.0 && linkDist < 1.5) {
              float d = sdSegment(gv, nearestPoint, point);
              float thickness = 0.03;
              float fade = smoothstep(1.5, 0.6, linkDist);
              lineIntensity += smoothstep(thickness, 0.0, d) * fade;
            }
          }
        }

        vec3 base = vec3(0.03, 0.04, 0.12);
        vec3 lineColor = vec3(0.30, 0.45, 1.0);
        vec3 pointColor = vec3(0.75, 0.55, 1.0);

        vec3 color = base;
        color += lineColor * lineIntensity * 0.65;
        color += pointColor * pointIntensity * 0.9;

        float vignette = smoothstep(1.1, 0.2, length(p));
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * ratio);
      canvas.height = Math.floor(canvas.clientHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    resize();

    let animationId = 0;
    const start = performance.now();

    const render = (now) => {
      const elapsed = (now - start) / 1000;
      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl-canvas" />;
};

export default WebGLBackground;
