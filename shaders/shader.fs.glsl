precision mediump float;

uniform highp vec3 uLightPosition;
uniform highp vec3 uAmbientLightColor;
uniform highp vec3 uDiffuseLightColor;
uniform highp vec3 uSpecularLightColor;

uniform float uShadingMode;
uniform highp float uLightingMode;
uniform highp float uLinearAttenuation;
uniform highp float uQuadraticAttenuation;
uniform highp float uIntensivity;

varying vec3 vNormal;
varying vec3 vFragPos;
varying vec3 vLightColor;

const float shininess = 16.0;

vec3 light(vec3 lightDir, vec3 normal) {

    float distance = length(lightDir);
    float attenuation = 1.0 / (1.0 + uLinearAttenuation * distance + uQuadraticAttenuation * distance * distance);

    float diff = max(dot(normal, lightDir), 0.0);

    vec3 diffuse = uDiffuseLightColor * diff * attenuation * uIntensivity;

    vec3 viewDir = -normalize(vFragPos);
    vec3 reflectDir = reflect(-lightDir, normal);

    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specular = uSpecularLightColor * spec * attenuation * uIntensivity;

    return (uAmbientLightColor + diffuse + specular);
}

vec3 lambertLight(vec3 lightDir, vec3 normal) {
    float distance = length(lightDir);
    float attenuation = 1.0 / (1.0 + uLinearAttenuation * distance + uQuadraticAttenuation * distance * distance);

    float diff = max(dot(normal, lightDir), 0.0);
    return uAmbientLightColor + uDiffuseLightColor * diff * attenuation * uIntensivity;
}

void main(void) {

    vec3 norm = normalize(vNormal);

    vec3 lightDir = normalize(uLightPosition - vFragPos);

    vec3 vLightWeighting = vec3(1.0, 1.0, 1.0);

    if(uLightingMode < 0.0)
        vLightWeighting = light(lightDir, norm);
    else
        vLightWeighting = lambertLight(lightDir, norm);

    if(uShadingMode < 0.0) {
        gl_FragColor = vec4(vec3(1, 1, 1) * vLightWeighting, 1.0);
    } else {
        gl_FragColor = vec4(vec3(1, 1, 1) * vLightColor, 1.0);
    }
}