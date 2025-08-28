
uniform sampler2D u_texture;
uniform vec2 u_resolution; // in pixels: [width, height]
uniform int u_radius;      // blur radius in pixels (clamped to 0..10)
varying vec2 vUv;

void main() {
  // texel size in UV space
  vec2 texel = 1.0 / u_resolution;

  // clamp radius to allowed range (0..10)
  int r = clamp(u_radius, 0, 10);

  vec3 sum = vec3(0.0);
  int count = 0;

  // fixed loop bounds -10..+10 so GLSL can compile on WebGL
  for (int oy = -10; oy <= 10; oy++) {
    for (int ox = -10; ox <= 10; ox++) {
      // only sample offsets inside the requested radius
      if (abs(ox) <= r && abs(oy) <= r) {
        vec2 offset = vec2(float(ox), float(oy)) * texel;
        sum += texture2D(u_texture, vUv + offset).rgb;
        count++;
      }
    }
  }

  vec3 color = sum / float(count);

  // preserve original alpha
  float alpha = texture2D(u_texture, vUv).a;
  gl_FragColor = vec4(color, alpha);
}