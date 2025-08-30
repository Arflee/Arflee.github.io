precision highp float;

uniform sampler2D uTexture;
uniform float uEdgeStart;
uniform float uEdgeEnd;
uniform float uIntensity;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);

    vec2 centeredUV = vUv - vec2(0.5);
    float distance = length(centeredUV);

    float vignette = smoothstep(uEdgeStart, uEdgeEnd, distance);
    vignette = mix(1.0, vignette, uIntensity);

    vec3 finalColor = mix(texColor.rgb, uColor, 1.0 - vignette);

    gl_FragColor = vec4(finalColor, texColor.a);
}
