attribute vec4 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec3 vNormal;
varying vec2 vTextureCoord;
varying vec3 vFragPos;

mat3 transpose(mat3 m) {
    return mat3(m[0][0], m[1][0], m[2][0],
                m[0][1], m[1][1], m[2][1],
                m[0][2], m[1][2], m[2][2]);
}

mat3 inverse(mat3 m) {
    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];
    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];
    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];

    float b01 = a22 * a11 - a12 * a21;
    float b11 = -a22 * a10 + a12 * a20;
    float b21 = a21 * a10 - a11 * a20;

    float det = a00 * b01 + a01 * b11 + a02 * b21;

    return mat3(b01, -a22 * a01 + a02 * a21, a12 * a01 - a02 * a11,
                b11, a22 * a00 - a02 * a20, -a12 * a00 + a02 * a10,
                b21, -a21 * a00 + a01 * a20, a11 * a00 - a01 * a10) / det;
}

void main(void) {
    vFragPos = (uModelViewMatrix * aVertexPosition).xyz;

    // Extract the upper-left 3x3 part of the model-view matrix
    mat3 modelView3x3 = mat3(uModelViewMatrix);

    // Calculate the normal matrix as the inverse transpose of the upper-left 3x3 part
    mat3 normalMatrix = transpose(inverse(modelView3x3));
    vNormal = normalize(normalMatrix * aVertexNormal);

    vTextureCoord = aTextureCoord;
    gl_Position = uProjectionMatrix * vec4(vFragPos, 1.0);
}
