precision highp float;

uniform sampler2D uTexture;
uniform float uIntensity;

varying vec2 vUv;

void main() {
    vec2 texel = 1.0 / vec2(512.0, 512.0);
    vec3 color = vec3(0.0);

    float kernel[7];
    kernel[0] = 0.07027;
    kernel[1] = 0.1316;
    kernel[2] = 0.1909;
    kernel[3] = 0.2146;
    kernel[4] = 0.1909;
    kernel[5] = 0.1316;
    kernel[6] = 0.07027;

    for (int i = -3; i <= 3; i++) {
        for (int j = -3; j <= 3; j++) {
            vec2 offset = vec2(float(i) * texel.x * uIntensity, float(j) * texel.y * uIntensity);
            color += texture2D(uTexture, vUv + offset).rgb * kernel[i + 3] * kernel[j + 3];
        }
    }

    gl_FragColor = vec4(color, 1.0);
}
