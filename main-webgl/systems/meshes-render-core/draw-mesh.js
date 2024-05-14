import { initBuffers } from "./init-mesh-buffers.js";

function drawMesh(gl, programInfo, mesh, projectionMatrix, scale = [1, 1, 1], translate = [0, 0, -6], rotation = [0, 0, 0], origins = [0, 0, 0], color, textureObjects, options) {
    const buffers = initBuffers(gl, mesh, color);

    const modelViewMatrix = mat4.create();
    mat4.identity(modelViewMatrix);

    mat4.translate(modelViewMatrix, modelViewMatrix, translate)

    mat4.scale(modelViewMatrix, modelViewMatrix, scale)

    const newrot = mat4.create();
    const q = mat4.create();
    quat.fromEuler(q, rotation[0] * 180 / Math.PI, rotation[1] * 180 / Math.PI, rotation[2] * 180 / Math.PI);
    mat4.fromQuat(newrot, q);

    mat4.multiply(modelViewMatrix, modelViewMatrix, newrot);

    mat4.translate(modelViewMatrix, modelViewMatrix, origins);

    // set vertex positions 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);

    // set vertex normals
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexNormal, 3, gl.FLOAT, false, 0, 0);

    // set vertex tangents
    // gl.bindBuffer(gl.ARRAY_BUFFER, buffers.tangent);
    // gl.vertexAttribPointer(programInfo.attribLocations.vertexTangent, 3, gl.FLOAT, false, 0, 0);

    // set vertext bitangents
    // gl.bindBuffer(gl.ARRAY_BUFFER, buffers.bitangent);
    // gl.vertexAttribPointer(programInfo.attribLocations.vertexBitangent, 3, gl.FLOAT, false, 0, 0);

    // set texture coordinates
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, 2, gl.FLOAT, false, 0, 0,);

    // set vertex colors
    // gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    // gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, 4, gl.FLOAT, false, 0, 0);

    // set incdices of triangles
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    gl.uniform1f(
        programInfo.uniformLocations.materialMode, options.type === "Particle" ? 1 : 0
    );

    // project and model view matrix
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    // texture samples
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureObjects[0]);
    gl.uniform1i(programInfo.uniformLocations.sampler, 0);

    gl.activeTexture(gl.TEXTURE0 + 1);
    gl.bindTexture(gl.TEXTURE_2D, textureObjects[1]);
    gl.uniform1i(programInfo.uniformLocations.normalSampler, 1);

    {
        const vertexCount = mesh.indices.length;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}



export { drawMesh }