precision mediump float;

uniform sampler2D uSampler;

varying highp vec2 vTextureCoord;

void main(void) {
    vec4 textureColor = texture2D(uSampler, vTextureCoord);

    gl_FragColor = vec4(textureColor.rgb, textureColor.a);
}