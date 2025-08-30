precision highp float;

uniform sampler2D uTexture;
uniform float uIntensity;

varying vec2 vUv;

void main() {
    vec2 texel = 1.0 / vec2(512.0, 512.0);
    vec2 offset = texel * uIntensity;

    vec4 color = vec4(0.0);
    color += texture2D(uTexture, vUv + offset * vec2(-1.0, -1.0));
    color += texture2D(uTexture, vUv + offset * vec2( 0.0, -1.0));
    color += texture2D(uTexture, vUv + offset * vec2( 1.0, -1.0));

    color += texture2D(uTexture, vUv + offset * vec2(-1.0,  0.0));
    color += texture2D(uTexture, vUv + offset * vec2( 0.0,  0.0));
    color += texture2D(uTexture, vUv + offset * vec2( 1.0,  0.0));

    color += texture2D(uTexture, vUv + offset * vec2(-1.0,  1.0));
    color += texture2D(uTexture, vUv + offset * vec2( 0.0,  1.0));
    color += texture2D(uTexture, vUv + offset * vec2( 1.0,  1.0));

    gl_FragColor = color / 9.0;
}
