precision highp float;

uniform sampler2D uTexture;
uniform float uPixelSize;
uniform float uIntensity;

varying vec2 vUv;

void main() {
    vec2 texSize = vec2(512.0, 512.0);
    vec2 block = uPixelSize / texSize;

    vec2 pixelUV = floor(vUv / block) * block + 0.5 * block;

    vec4 originalColor = texture2D(uTexture, vUv);
    vec4 pixelColor = texture2D(uTexture, pixelUV);

    gl_FragColor = mix(originalColor, pixelColor, uIntensity);
}
