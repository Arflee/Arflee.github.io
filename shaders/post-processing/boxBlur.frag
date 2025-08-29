precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    // TODO add intensity

    vec2 texel = 1.0 / vec2(256.0, 256.0);
    // 9-point blur kernel (3x3)
    vec4 color = vec4(0.0);
    color += texture2D(uTexture, vUv + texel * vec2(-1.0, -1.0));
    color += texture2D(uTexture, vUv + texel * vec2( 0.0, -1.0));
    color += texture2D(uTexture, vUv + texel * vec2( 1.0, -1.0));

    color += texture2D(uTexture, vUv + texel * vec2(-1.0,  0.0));
    color += texture2D(uTexture, vUv + texel * vec2( 0.0,  0.0));
    color += texture2D(uTexture, vUv + texel * vec2( 1.0,  0.0));

    color += texture2D(uTexture, vUv + texel * vec2(-1.0,  1.0));
    color += texture2D(uTexture, vUv + texel * vec2( 0.0,  1.0));
    color += texture2D(uTexture, vUv + texel * vec2( 1.0,  1.0));

    // average
    gl_FragColor = color / 9.0;
}
