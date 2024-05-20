import { initImGUI } from "../imgui.js";
import { loadShaders } from "./utils/loadShaders.js";
import { Scene_Egor, Scene_Matvey } from "./scene.js";
import { RenderCore } from "./systems/render-core/renderCore.js";

let deltaTime = 0;

//switch scene
document.addEventListener('keydown', (e) => {
  if (e.key == 2) {
    alert('switched to Matvey_Scene');
    preloads('Matvey');
  }; 
  if (e.key == 1) {
    alert('switched to Egor_Scene');
    preloads('Egor');
  }; 
});

async function main(canvas, vsSource, fsSource, pscene) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  let scene;

  if (pscene == "Matvey") {
    scene = new Scene_Matvey();
  }

  if (pscene == "Egor") {
    scene = new Scene_Egor();
  }

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

    scene.tick();
    renderCore.tick();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

async function preloads(scene) {
  var canvas = document.querySelector("#glcanvas1");

  const shaders = await loadShaders();
  await main(canvas, shaders.vertexShader, shaders.fragmentShader, scene);

  initImGUI(canvas);
}

preloads('Egor');