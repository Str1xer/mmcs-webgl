import { drawMesh } from "./draw-mesh.js";
import { cube } from "../model.js";
import { placePointerLight } from "./place-pointer-light.js";

function drawScene(gl, programInfo, loadedAssets) {
  gl.clearColor(0, 0, 0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true)

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fieldOfView = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  placePointerLight(gl, programInfo.program, 0, [-1.5, 0, -12.5]);
  placePointerLight(gl, programInfo.program, 1, [2, 0, -12.5]);
  placePointerLight(gl, programInfo.program, 2, [-3.2, -1.9, -11.5]);
  placePointerLight(gl, programInfo.program, 3, [-2.8, -1.9, -11.5]);
  // placePointerLight(gl, programInfo.program, 2, [2, 0.5, -15.5]);
  // placePointerLight(gl, programInfo.program, 1, [-4, 10, -1.25]);
  // placePointerLight(gl, programInfo.program, 2, [-4, 10, -1.25]);

  gl.uniform3fv(
    programInfo.uniformLocations.ambientLightColor, ambientLightColor
  );
  gl.uniform3fv(
    programInfo.uniformLocations.diffusionLightColor, diffusionLightColor
  );
  gl.uniform3fv(
    programInfo.uniformLocations.specularLightColor, specularLightColor
  );
  gl.uniform1f(
    programInfo.uniformLocations.linearAttenuation, linearAttenuation
  );
  gl.uniform1f(
    programInfo.uniformLocations.quadraticAttenuation, quadraticAttenuation
  );
  gl.uniform1f(
    programInfo.uniformLocations.intensivity, intensivity
  );
  gl.uniform1f(
    programInfo.uniformLocations.colorWeight, colorWeight
  );
  gl.uniform1f(
    programInfo.uniformLocations.digitWeight, digitWeight
  );
  gl.uniform1f(
    programInfo.uniformLocations.materialWeight, materialWeight
  );

  drawMesh(gl, programInfo, loadedAssets["/assets/plane.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat15.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/roadOutside.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat6.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/finishTowers.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/insideFlowers.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat15.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/objectLine.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/roadInside.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat16.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/bushes1.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat15.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/bushes2.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat1.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/redTyres.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat6.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/whiteTyres.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/treeBases.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat2.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/treeHeaders1.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat15.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/treeHeaders2.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat1.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/tribune.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/tribuneBase.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat6.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/sand.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat13.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/light.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])

  drawMesh(gl, programInfo, loadedAssets["/assets/finishHeader.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat6.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/finishText.obj"], projectionMatrix, [1, 1, 1], [0, -2.5, -12.5], [0, Math.PI / 2, 0], [0, 0, 1.25], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])


  const vehiclePosition = []
  const vehicleRotation = []

  // Draw Vehicle
  drawMesh(gl, programInfo, loadedAssets["/assets/vehicle.obj"], projectionMatrix, [0.0125, 0.0125, 0.0125], [-3, -2.5, -12], [0, Math.PI / 2 * (-3.9), 0], [0, 0.4 / 0.0125, 0], [0, 1, 0, 1], loadedAssets["/textures/mat6.png"])
  drawMesh(gl, programInfo, loadedAssets["/assets/vehicleTyres.obj"], projectionMatrix, [0.0125, 0.0125, 0.0125], [-3, -2.5, -12], [0, Math.PI / 2 * (-3.9), 0], [0, 0.4 / 0.0125, 0], [0, 1, 0, 1], loadedAssets["/textures/mat0.png"])

  gl.flush();
}

export { drawScene };