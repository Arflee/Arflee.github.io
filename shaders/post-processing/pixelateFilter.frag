precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {

    // TODO add pixel size and resolution uniform
    vec2 block = 20. / vec2(512.0, 512.0);

    vec2 uv = floor(vUv / block) * block + 0.5 * block;
    vec4 color = texture2D(uTexture, uv);

    gl_FragColor = color;
}
