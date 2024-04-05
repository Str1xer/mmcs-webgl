function initBuffers(gl, model, color) {
  const positionBuffer = initPositionBuffer(gl, model.vertexPositions);

  const colorBuffer = initColorBuffer(gl, color);

  const indexBuffer = initIndexBuffer(gl, model.indices);

  const normalBuffer = initNormalBuffer(gl, model.vertexNormals);

  const textureCoordBuffer = initTextureBuffer(gl);

  return {
    position: positionBuffer,
    normal: normalBuffer,
    indices: indexBuffer,
    textureCoord: textureCoordBuffer,
    color: colorBuffer
  };
}

function initPositionBuffer(gl, positions) {
  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

function initIndexBuffer(gl, indices) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  return indexBuffer;
}

function initNormalBuffer(gl, vertexNormals) {
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);

  return normalBuffer;
}

function initColorBuffer(gl, color) {
  var colors = [];

  for (var j = 0; j < 36; ++j) {
    colors = colors.concat(color);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}

function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0,
    // Back
    1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    // Top
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bottom
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Right
    1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    // Left
    0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}

export { initBuffers };

