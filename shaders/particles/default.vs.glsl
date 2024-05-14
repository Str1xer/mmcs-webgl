attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTextureCoord;
varying vec3 vFragPos;

void main(void) {
    vFragPos = (uModelViewMatrix * aVertexPosition).xyz;

    vTextureCoord = aTextureCoord;

    gl_Position = uProjectionMatrix * vec4(vFragPos, 1.0);
}
