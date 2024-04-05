import { drawMesh } from "./draw-mesh.js";
import { cube } from "../model.js";

function loadTexture(gl, texName) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(
    gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
    gl.UNSIGNED_BYTE,
    document.getElementById(texName)
  );
  gl.bindTexture(gl.TEXTURE_2D, null);

  return texture;
}

function drawScene(gl, programInfo) {
  // const textureMaterial = loadTexture(gl, "crate-image");
  const textures = {
    digit1: loadTexture(gl, "tex1"),
    digit2: loadTexture(gl, "tex2"),
    digit3: loadTexture(gl, "tex3"),
    dirt: loadTexture(gl, "dirt"),
    gold: loadTexture(gl, "gold"),
    wood: loadTexture(gl, "wood")
  }

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

  drawMesh(gl, programInfo, cube, projectionMatrix, [0, 0, -10], [0, rotation, 0], [2, -1, 0], [1, 0, 0, 1], textures.digit3, textures.dirt)
  drawMesh(gl, programInfo, cube, projectionMatrix, [0, 0, -10], [0, rotation, 0], [0, -1, 0], [0, 1, 0, 1], textures.digit1, textures.wood)
  drawMesh(gl, programInfo, cube, projectionMatrix, [0, 0, -10], [0, rotation, 0], [-2, -1, 0], [0, 0, 1, 1], textures.digit2, textures.gold)
  drawMesh(gl, programInfo, cube, projectionMatrix, [0, 0, -10], [0, rotation, 0], [0, 1, 0], [1, 1, 0, 1], textures.digit1, textures.wood)
}

export { drawScene };