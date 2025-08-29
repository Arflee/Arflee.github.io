precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    // TODO resolution

    vec2 texel = 1.0 / vec2(512.0, 512.0);

    // Sample neighboring pixels
    float tl = texture2D(uTexture, vUv + vec2(-texel.x,  texel.y)).r;
    float  t = texture2D(uTexture, vUv + vec2(0.0,       texel.y)).r;
    float tr = texture2D(uTexture, vUv + vec2(texel.x,   texel.y)).r;
    float l  = texture2D(uTexture, vUv + vec2(-texel.x,  0.0)).r;
    float r  = texture2D(uTexture, vUv + vec2(texel.x,   0.0)).r;
    float bl = texture2D(uTexture, vUv + vec2(-texel.x, -texel.y)).r;
    float b  = texture2D(uTexture, vUv + vec2(0.0,      -texel.y)).r;
    float br = texture2D(uTexture, vUv + vec2(texel.x,  -texel.y)).r;

    // Sobel kernels
    float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
    float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;

    float edge = length(vec2(gx, gy));

    gl_FragColor = vec4(vec3(edge), 1.0);
}
