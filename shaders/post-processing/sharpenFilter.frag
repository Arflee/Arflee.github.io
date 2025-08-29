precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    // TODO add intensity

    vec2 texel = 1.0 / vec2(256.0, 256.0);

    vec4 color = texture2D(uTexture, vUv) * 5.0;
    vec4 colorUp = texture2D(uTexture, vUv + vec2(0.0, texel.y));
    vec4 colorDown = texture2D(uTexture, vUv - vec2(0.0, texel.y));
    vec4 colorLeft = texture2D(uTexture, vUv - vec2(texel.x, 0.0));
    vec4 colorRight = texture2D(uTexture, vUv + vec2(texel.x, 0.0));

    vec3 finalColor = (color.rgb - colorUp.rgb - colorDown.rgb - colorLeft.rgb - colorRight.rgb);

    gl_FragColor = vec4(finalColor, texture2D(uTexture, vUv).a);
}
