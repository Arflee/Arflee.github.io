precision highp float;

uniform sampler2D uTexture;
uniform float uIntensity;
uniform vec3 uRgbWeights;

varying vec2 vUv;

void main() {
    vec4 tex = texture2D(uTexture, vUv);

    float lum = dot(tex.rgb, uRgbWeights);
    vec3 gray = vec3(lum);
    vec3 finalColor = mix(tex.rgb, gray, uIntensity);

    gl_FragColor = vec4(finalColor, tex.a);
}