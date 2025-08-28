import vertex from "./post-processing/plainTexture.vert";
import plainTexture from "./post-processing/plainTexture.frag";
import boxBlur from "./post-processing/boxBlur.frag";
import gaussianBlur from "./post-processing/gaussianBlur.frag";

export const shaders: Record<string, string> = {
  vertex,
  boxBlur,
  plainTexture,
  gaussianBlur
};