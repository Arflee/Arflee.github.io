precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec4 color = texture2D(uTexture, vUv);

  float r = color.r;
  float g = color.g;
  float b = color.b;

  // Apply sepia tone transformation
  float newR = dot(vec3(0.393, 0.769, 0.189), vec3(r, g, b));
  float newG = dot(vec3(0.349, 0.686, 0.168), vec3(r, g, b));
  float newB = dot(vec3(0.272, 0.534, 0.131), vec3(r, g, b));

  gl_FragColor = vec4(newR, newG, newB, color.a);
}