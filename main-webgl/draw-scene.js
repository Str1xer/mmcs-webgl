import { drawMesh } from "./draw-mesh.js";
import { cube } from "../model.js";

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

  gl.uniform3fv(
    programInfo.uniformLocations.lightPosition, [0, 0, 0]
  );

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

  drawMesh(gl, programInfo, loadedAssets["/assets/smoothed.obj"], projectionMatrix, [0, -10, -50], [rotationX, rotationY, rotationZ], [0, 0, 0], [0, 1, 0, 1], loadedAssets["/normals.png"])

  gl.flush();
}

export { drawScene };