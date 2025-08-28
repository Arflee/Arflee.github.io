import boxBlur from "./post-processing/boxBlur.frag";
import plainTexture from "./post-processing/plainTexture.frag";
import vertex from "./post-processing/plainTexture.vert";

export const shaders: Record<string, string> = {
  vertex,
  boxBlur,
  plainTexture,
};