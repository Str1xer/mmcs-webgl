import { initBuffers } from "./init-mesh-buffers.js";

function drawMesh(gl, programInfo, mesh, projectionMatrix, translate = [0, 0, -6], rotation = [0, 0, 0], origins = [0, 0, 0], color) {
    const buffers = initBuffers(gl, mesh, color);

    const modelViewMatrix = mat4.create();
    mat4.identity(modelViewMatrix);

    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        translate
    )

    var newrot = mat4.create();
    var q = mat4.create();
    quat.fromEuler(q, rotation[0] * 180 / Math.PI, rotation[1] * 180 / Math.PI, rotation[2] * 180 / Math.PI);
    mat4.fromQuat(newrot, q);

    mat4.multiply(modelViewMatrix, modelViewMatrix, newrot);

    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        origins
    );

    setPositionAttribute(gl, buffers, programInfo);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    setNormalAttribute(gl, buffers, programInfo);

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix
    );

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix
    );

    {
        const vertexCount = mesh.indices.length;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

export { drawMesh }

function setPositionAttribute(gl, buffers, programInfo) {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

// function setColorAttribute(gl, buffers, programInfo) {
//     const numComponents = 4;
//     const type = gl.FLOAT;
//     const normalize = false;
//     const stride = 0;
//     const offset = 0;
//     gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
//     gl.vertexAttribPointer(
//         programInfo.attribLocations.vertexColor,
//         numComponents,
//         type,
//         normalize,
//         stride,
//         offset
//     );
//     gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
// }

function setNormalAttribute(gl, buffers, programInfo) {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexNormal,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
}
