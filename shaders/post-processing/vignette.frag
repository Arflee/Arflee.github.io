precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    // TODO add 2 edges, intensity, color

    vec4 color = texture2D(uTexture, vUv);

    vec2 centeredUV = vUv - vec2(0.5);
    float distance = length(centeredUV);

    float vignette = smoothstep(0.8, 0.5, distance);

    gl_FragColor = vec4(color.rgb * vignette, color.a);
}
