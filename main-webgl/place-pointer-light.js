function placePointerLight(gl, shaderProgram, indexLight, location = [0, 0, 0], intensivity = 1,) {
    var uniformLocation = gl.getUniformLocation(shaderProgram, "uLightPosition[" + indexLight + "]");
    gl.uniform3fv(uniformLocation, location);
}

export { placePointerLight }