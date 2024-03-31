import { drawScene } from "./draw-scene.js";
import { initImGUI } from "../imgui.js";

let deltaTime = 0;

async function loadShaders() {
  const vertexResponse = await fetch("/mmcs-webgl/shaders/shader.vs.glsl");
  const vertexShaderText = await vertexResponse.text();

  const fragmentResponse = await fetch("/mmcs-webgl/shaders/shader.fs.glsl");
  const fragmentShaderText = await fragmentResponse.text();

  return { vertexShader: vertexShaderText, fragmentShader: fragmentShaderText }
}


loadShaders().then(response => {
  var canvas = document.querySelector("#glcanvas1");
  main(canvas, response.vertexShader, response.fragmentShader);
  initImGUI(canvas);
})

function main(canvas, vsSource, fsSource) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const gl = canvas.getContext("webgl");

  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  gl.useProgram(shaderProgram)

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
      // vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),

      lightPosition: gl.getUniformLocation(shaderProgram, "uLightPosition"),
      ambientLightColor: gl.getUniformLocation(shaderProgram, "uAmbientLightColor"),
      diffusionLightColor: gl.getUniformLocation(shaderProgram, "uDiffuseLightColor"),
      specularLightColor: gl.getUniformLocation(shaderProgram, "uSpecularLightColor"),

      shadingMode: gl.getUniformLocation(shaderProgram, "uShadingMode"),
      lightingMode: gl.getUniformLocation(shaderProgram, "uLightingMode"),
      linearAttenuation: gl.getUniformLocation(shaderProgram, "uLinearAttenuation"),
      quadraticAttenuation: gl.getUniformLocation(shaderProgram, "uQuadraticAttenuation"),
      intensivity: gl.getUniformLocation(shaderProgram, "uIntensivity"),
    },
  };

  let then = 0;

  let timeFromStart = 0;

  function render(now) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;
    timeFromStart += velocity * deltaTime;

    drawScene(gl, programInfo, timeFromStart);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }

  return shaderProgram;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

var velocity = 0;

document.onkeydown = (e) => {
  if (e.keyCode == 39) velocity = 1;
  if (e.keyCode == 37) velocity = -1;
}

document.onkeyup = (e) => { velocity = 0; }