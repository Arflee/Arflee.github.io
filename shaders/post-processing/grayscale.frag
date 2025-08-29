precision highp float;

uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    // TODO add different weights for r, g, b
    // TODO add intensity

    vec4 tex = texture2D(uTexture, vUv);

    float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
    vec3 gray = vec3(lum);

    gl_FragColor = vec4(gray, tex.a);
}