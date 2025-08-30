precision highp float;

uniform sampler2D uTexture;
uniform float uIntensity;
varying vec2 vUv;

void main() {
    vec2 texel = 1.0 / vec2(512.0, 512.0);

    vec4 center = texture2D(uTexture, vUv);
    vec4 up = texture2D(uTexture, vUv + vec2(0.0, texel.y));
    vec4 down = texture2D(uTexture, vUv - vec2(0.0, texel.y));
    vec4 left = texture2D(uTexture, vUv - vec2(texel.x, 0.0));
    vec4 right = texture2D(uTexture, vUv + vec2(texel.x, 0.0));

    vec3 neighborAvg = (up.rgb + down.rgb + left.rgb + right.rgb) / 4.0;
    vec3 finalColor = center.rgb + uIntensity * (center.rgb - neighborAvg);

    gl_FragColor = vec4(finalColor, center.a);
}
