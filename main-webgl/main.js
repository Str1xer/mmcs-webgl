import { initImGUI } from "../imgui.js";
import { loadShaders } from "./utils/loadShaders.js";
import { Scene } from "./scene.js";
import { RenderCore } from "./systems/render-core/renderCore.js";
import { SceneParticle } from "./sceneParticle.js";

let deltaTime = 0;

async function main(canvas, vsSource, fsSource) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const scene = new SceneParticle();
  await scene.preload();
  await scene.start();

  var renderCore = new RenderCore(canvas, vsSource, fsSource);

  await renderCore.preload();

  await renderCore.start();

  let then = 0;
  function render(now) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;

    scene.tick(deltaTime);
    renderCore.tick();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

async function preloads() {
  var canvas = document.querySelector("#glcanvas1");

  const shaders = await loadShaders();
  await main(canvas, shaders.vertexShader, shaders.fragmentShader);

  initImGUI(canvas);
}

preloads();