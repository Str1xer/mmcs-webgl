import { initBuffers } from "./init-mesh-buffers.js";

function drawMesh(gl, programInfo, mesh, projectionMatrix, translate = [0, 0, -6], rotation = [0, 0, 0], origins = [0, 0, 0], color, texture, texture2 = null) {
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

    // const rotationMatrix = mat4.create();
    // mat4.copy(rotationMatrix, modelViewMatrix);
    // rotationMatrix[12] = 0;
    // rotationMatrix[13] = 0;
    // rotationMatrix[14] = 0;
    // const normalMatrix = mat4.create();
    // mat4.invert(normalMatrix, rotationMatrix);
    // mat4.transpose(normalMatrix, normalMatrix);

    setPositionAttribute(gl, buffers, programInfo);

    setTextureAttribute(gl, buffers, programInfo);

    setColorAttribute(gl, buffers, programInfo);

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

    // gl.uniformMatrix4fv(
    //     programInfo.uniformLocations.normalMatrix,
    //     false,
    //     normalMatrix
    // );


    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

    if (texture2) {
        gl.activeTexture(gl.TEXTURE0 + 1);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.uniform1i(programInfo.uniformLocations.uSampler2, 1);
    }


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

function setTextureAttribute(gl, buffers, programInfo) {
    const num = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        num,
        type,
        normalize,
        stride,
        offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}

function setColorAttribute(gl, buffers, programInfo) {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}