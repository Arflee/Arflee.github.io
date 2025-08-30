precision highp float;

uniform sampler2D uTexture;
uniform float uIntensity;
varying vec2 vUv;

void main() {
    vec2 texel = uIntensity / vec2(512.0, 512.0);

    float tl = texture2D(uTexture, vUv + vec2(-texel.x,  texel.y)).r;
    float  t = texture2D(uTexture, vUv + vec2(0.0,       texel.y)).r;
    float tr = texture2D(uTexture, vUv + vec2(texel.x,   texel.y)).r;
    float l  = texture2D(uTexture, vUv + vec2(-texel.x,  0.0)).r;
    float r  = texture2D(uTexture, vUv + vec2(texel.x,   0.0)).r;
    float bl = texture2D(uTexture, vUv + vec2(-texel.x, -texel.y)).r;
    float b  = texture2D(uTexture, vUv + vec2(0.0,      -texel.y)).r;
    float br = texture2D(uTexture, vUv + vec2(texel.x,  -texel.y)).r;

    float gx = -tl - l - bl + tr + r + br;
    float gy = -tl - t - tr + bl + b + br;

    float edge = length(vec2(gx, gy));
    gl_FragColor = vec4(vec3(edge), 1.0);
}
