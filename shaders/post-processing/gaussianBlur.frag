uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec2 texel = 1.0 / vec2(256.0, 256.0);
    vec3 color = vec3(0.0);

    // approximate Gaussian weights for radius 3
    float kernel[7];
    kernel[0] = 0.07027;
    kernel[1] = 0.1316;
    kernel[2] = 0.1909;
    kernel[3] = 0.2146;
    kernel[4] = 0.1909;
    kernel[5] = 0.1316;
    kernel[6] = 0.07027;

    for (int i = -3; i <= 3; i++) {
        color += texture2D(uTexture, vUv + vec2(float(i) * texel.x, 0.0)).rgb * kernel[i + 3];
    }

    gl_FragColor = vec4(color, 1.0);
}