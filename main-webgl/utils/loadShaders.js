async function loadShaders() {
    const vertexResponse = await fetch(debug ? "/shaders/shader.vs.glsl" : "/mmcs-webgl/shaders/shader.vs.glsl");
    const vertexShaderText = await vertexResponse.text();

    const fragmentResponse = await fetch(debug ? "/shaders/shader.fs.glsl" : "/mmcs-webgl/shaders/shader.fs.glsl");
    const fragmentShaderText = await fragmentResponse.text();

    return { vertexShader: vertexShaderText, fragmentShader: fragmentShaderText }
}

export { loadShaders }