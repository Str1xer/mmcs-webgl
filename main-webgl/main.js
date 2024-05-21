import { initImGUI } from "../imgui.js";
import { loadShaders } from "./utils/loadShaders.js";
import { Scene_Matvey } from "./scene.js";
import { Scene_Egor } from "./scene_egor.js";
import { RenderCore } from "./systems/render-core/renderCore.js";
import { Scene_Alex } from "./scene_alex.js";

let deltaTime = 0;

//switch scene
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key == 2) {
    e.preventDefault();
    alert("switched to Matvey_Scene");
    preloads("Matvey");
  }

  if (e.ctrlKey && e.key == 1) {
    e.preventDefault();
    alert("switched to Egor_Scene");
    preloads("Egor");
  }

  if (e.ctrlKey && e.key == 3) {
    e.preventDefault();
    alert("switched to Alex_Scene");
    preloads("Alex");
  }
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

  if (pscene == "Alex") {
    scene = new Scene_Alex();
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