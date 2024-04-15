attribute vec4 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec3 aVertexTangent;
attribute vec3 aVertexBitangent;
attribute vec2 aTextureCoord;
attribute vec3 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uLightPosition;
uniform vec3 uDiffuseLightColor;
uniform vec3 uSpecularLightColor;
uniform vec3 uAmbientLightColor;

// uniform float uLightingMode;
uniform float uLinearAttenuation;
uniform float uQuadraticAttenuation;
uniform float uIntensivity;

varying vec3 vNormal;
varying vec3 vTangent;
varying vec3 vBitangent;

varying vec3 vFragPos;
// varying vec3 vLightColor;
varying vec3 vFragColor;
varying highp vec2 vTextureCoord;
varying mat3 vTBNMatrix;

vec3 calculate_tangent(vec3 n) {
    vec3 v = vec3(1.0, 0.0, 0.0);
    float d = dot(v, n);
    if(abs(d) < 0.0) {
        v = vec3(0.0, 1.0, 0.0);
        d = dot(v, n);
    }
    return normalize(v - d * n);
}

void main(void) {
    vFragPos = (uModelViewMatrix * aVertexPosition).xyz;

    vNormal = normalize((uModelViewMatrix * vec4(aVertexNormal, 0.0)).xyz);
    vec3 tan = calculate_tangent(vNormal);
    vec3 bitan = normalize(cross(vNormal, tan));
    vTangent = normalize((uModelViewMatrix * vec4(tan, 0.0)).xyz);
    vBitangent = normalize((uModelViewMatrix * vec4(bitan, 0.0)).xyz);

    vTBNMatrix = mat3(vNormal, vTangent, vBitangent);

    vTextureCoord = aTextureCoord;

    vFragColor = aVertexColor;

    gl_Position = uProjectionMatrix * vec4(vFragPos, 1.0);
}