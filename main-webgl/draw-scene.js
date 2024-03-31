import { drawMesh } from "./draw-mesh.js";
import { cube } from "../model.js";

function drawScene(gl, programInfo) {
  gl.clearColor(0, 0, 0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fieldOfView = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  gl.uniform3fv(
    programInfo.uniformLocations.lightPosition, [2, 0.5, -8]
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
    programInfo.uniformLocations.shadingMode, shadingMode
  );
  gl.uniform1f(
    programInfo.uniformLocations.lightingMode, lightingMode
  );
  gl.uniform1f(
    programInfo.uniformLocations.linearAttenuation, linearAttenuation
  );
  gl.uniform1f(
    programInfo.uniformLocations.quadraticAttenuation, quadraticAttenuation
  );

  drawMesh(gl, programInfo, cube, projectionMatrix, [0, 0, -10], [0, rotation, 0], [0, 0, 0], [1, 1, 1, 1])
}

export { drawScene };
