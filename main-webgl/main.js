import { drawScene } from "./draw-scene.js";
import { initImGUI } from "../imgui.js";
import { loadShaders } from "./utils/loadShaders.js";
import { loadModel, parseOBJ } from "./utils/loadModel.js";
import { loadTexture } from "./utils/loadTextures.js";
let deltaTime = 0;

async function preloads() {
  var canvas = document.querySelector("#glcanvas1");

  const shaders = await loadShaders();
  await main(canvas, shaders.vertexShader, shaders.fragmentShader);

  initImGUI(canvas);
}

preloads();

async function main(canvas, vsSource, fsSource) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const gl = canvas.getContext("webgl2");

  gl.getExtension("OES_standard_derivatives")

  canvas.addEventListener("webglcontextlost", (e) => { console.log(e) });

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
      vertexTangent: gl.getAttribLocation(shaderProgram, "aVertexTangent"),
      vertexBitangent: gl.getAttribLocation(shaderProgram, "aVertexBitangent"),
      vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
      textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      sampler: gl.getUniformLocation(shaderProgram, "uSampler"),
      normalSampler: gl.getUniformLocation(shaderProgram, "uNormalSampler"),

      // lightPosition: gl.getUniformLocation(shaderProgram, "uLightPosition"),
      ambientLightColor: gl.getUniformLocation(shaderProgram, "uAmbientLightColor"),
      diffusionLightColor: gl.getUniformLocation(shaderProgram, "uDiffuseLightColor"),
      specularLightColor: gl.getUniformLocation(shaderProgram, "uSpecularLightColor"),

      linearAttenuation: gl.getUniformLocation(shaderProgram, "uLinearAttenuation"),
      quadraticAttenuation: gl.getUniformLocation(shaderProgram, "uQuadraticAttenuation"),
      intensivity: gl.getUniformLocation(shaderProgram, "uIntensivity"),

      colorWeight: gl.getUniformLocation(shaderProgram, "uColorWeight"),
      digitWeight: gl.getUniformLocation(shaderProgram, "uDigitWeight"),
      materialWeight: gl.getUniformLocation(shaderProgram, "uMaterialWeight"),
    },
  };

  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexTangent);
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexBitangent);
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);

  const loadedAssets = {}
  loadedAssets["/assets/plane.obj"] = await parseOBJ(await loadModel("/assets/plane.obj"));

  loadedAssets["/assets/roadOutside.obj"] = await parseOBJ(await loadModel("/assets/roadOutside.obj"));
  loadedAssets["/assets/roadInside.obj"] = await parseOBJ(await loadModel("/assets/roadInside.obj"));

  loadedAssets["/assets/finishTowers.obj"] = await parseOBJ(await loadModel("/assets/finishTowers.obj"));
  loadedAssets["/assets/insideFlowers.obj"] = await parseOBJ(await loadModel("/assets/insideFlowers.obj"));
  loadedAssets["/assets/objectLine.obj"] = await parseOBJ(await loadModel("/assets/objectLine.obj"));
  loadedAssets["/assets/bushes1.obj"] = await parseOBJ(await loadModel("/assets/bushes1.obj"));
  loadedAssets["/assets/bushes2.obj"] = await parseOBJ(await loadModel("/assets/bushes2.obj"));

  loadedAssets["/assets/redTyres.obj"] = await parseOBJ(await loadModel("/assets/redTyres.obj"));
  loadedAssets["/assets/whiteTyres.obj"] = await parseOBJ(await loadModel("/assets/whiteTyres.obj"));

  loadedAssets["/assets/treeBases.obj"] = await parseOBJ(await loadModel("/assets/treeBases.obj"));
  loadedAssets["/assets/treeHeaders1.obj"] = await parseOBJ(await loadModel("/assets/treeHeaders1.obj"));
  loadedAssets["/assets/treeHeaders2.obj"] = await parseOBJ(await loadModel("/assets/treeHeaders2.obj"));

  loadedAssets["/assets/sand.obj"] = await parseOBJ(await loadModel("/assets/sand.obj"));

  loadedAssets["/assets/tribune.obj"] = await parseOBJ(await loadModel("/assets/tribune.obj"));
  loadedAssets["/assets/tribuneBase.obj"] = await parseOBJ(await loadModel("/assets/tribuneBase.obj"));

  loadedAssets["/assets/light.obj"] = await parseOBJ(await loadModel("/assets/light.obj"));

  loadedAssets["/assets/finishHeader.obj"] = await parseOBJ(await loadModel("/assets/finishHeader.obj"));
  loadedAssets["/assets/finishText.obj"] = await parseOBJ(await loadModel("/assets/finishText.obj"));

  loadedAssets["/assets/vehicleTyres.obj"] = await parseOBJ(await loadModel("/assets/vehicleTyres.obj"));
  loadedAssets["/assets/vehicle.obj"] = await parseOBJ(await loadModel("/assets/vehicle.obj"));

  loadedAssets["/normals.png"] = await loadTexture(gl, "/normals.png");
  loadedAssets["/textures/mat0.png"] = await loadTexture(gl, "/textures/mat0.png");
  loadedAssets["/textures/mat1.png"] = await loadTexture(gl, "/textures/mat1.png");
  loadedAssets["/textures/mat2.png"] = await loadTexture(gl, "/textures/mat2.png");
  loadedAssets["/textures/mat6.png"] = await loadTexture(gl, "/textures/mat6.png");
  loadedAssets["/textures/mat9.png"] = await loadTexture(gl, "/textures/mat9.png");
  loadedAssets["/textures/mat13.png"] = await loadTexture(gl, "/textures/mat13.png");
  loadedAssets["/textures/mat15.png"] = await loadTexture(gl, "/textures/mat15.png");
  loadedAssets["/textures/mat16.png"] = await loadTexture(gl, "/textures/mat16.png");

  console.log(loadedAssets);

  let then = 0;

  let timeFromStart = 0;

  function render(now) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;
    // rotation += velocity * deltaTime;

    drawScene(gl, programInfo, loadedAssets);

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