precision mediump float;

uniform highp vec3 uLightPosition[255];
uniform highp float uLightIntensivity[255];
uniform lowp int uLightSourceCount;
uniform highp vec3 uAmbientLightColor;
uniform highp vec3 uDiffuseLightColor;
uniform highp vec3 uSpecularLightColor;

uniform highp float uLinearAttenuation;
uniform highp float uQuadraticAttenuation;
uniform sampler2D uSampler;
uniform sampler2D uNormalSampler;

varying vec3 vNormal;

varying vec3 vFragPos;

varying highp vec2 vTextureCoord;

const float shininess = 16.0;

vec3 light(vec3 lightDir, vec3 normal, float intensivity) {
    float distance = length(lightDir);
    float attenuation = 1.0 / (1.0 + uLinearAttenuation * distance + uQuadraticAttenuation * distance * distance);

    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = uDiffuseLightColor * diff * attenuation * intensivity;

    vec3 viewDir = normalize(-vFragPos);
    vec3 reflectDir = reflect(-lightDir, normal);

    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specular = uSpecularLightColor * spec * attenuation * intensivity;

    return diffuse + specular;
}

void main(void) {
    vec4 textureColor = texture2D(uSampler, vTextureCoord);

    vec3 normalMapValue = texture2D(uNormalSampler, vTextureCoord).rgb;
    normalMapValue = normalize(normalMapValue * 2.0 - 1.0);

    vec3 vLightWeighting = uAmbientLightColor;

    vec3 viewDir = normalize(-vFragPos);

    int i = 0;
    for(int i = 0; i < 255; i++) {
        if(i >= uLightSourceCount)
            break;
        vec3 lightDir = normalize(uLightPosition[i] - vFragPos);
        vLightWeighting += light(lightDir, normalize(vNormal), uLightIntensivity[i]);
    }

    gl_FragColor = vec4(textureColor.rgb * vLightWeighting, 1.0);
}