precision highp float;

uniform vec2 uResolution;
uniform float uTime;
varying vec2 vUv;

// 2D random
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Smooth interpolation
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners of the cell
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Cubic Hermite curve
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

// Fractional Brownian Motion
float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;

    for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    vec2 uv = vUv * uResolution.xy / min(uResolution.x, uResolution.y);

    // Animate input coordinates
    vec2 q = vec2( fbm(uv + 0.05 * uTime),
                   fbm(uv + vec2(0.06) * uTime) );

    vec2 r = vec2( fbm(uv + 1.0*q + vec2(1.7,9.2) + 0.02*uTime),
                   fbm(uv + 1.0*q + vec2(8.3,2.8) + 0.08*uTime));

    float f = fbm(uv + r + uTime * 0.1);

    // Create colorful gradients from noise
    vec3 col = mix(vec3(0.3, 0.5, 0.8),
                   vec3(1.0, 0.4, 0.7),
                   f);

    col = mix(col,
              vec3(0.4, 1.0, 0.5),
              r.x * r.y);

    // Apply soft blur-like effect by mixing with smoothed version
    col = mix(col, vec3(f), 0.2);

    gl_FragColor = vec4(col, 1.0);
}
