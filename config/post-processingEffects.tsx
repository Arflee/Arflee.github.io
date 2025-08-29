import vertex from "../shaders/post-processing/plainTexture.vert";
import plainTexture from "../shaders/post-processing/plainTexture.frag";
import boxBlur from "../shaders/post-processing/boxBlur.frag";
import gaussianBlur from "../shaders/post-processing/gaussianBlur.frag";
import grayscale from "../shaders/post-processing/grayscale.frag";
import invert from "../shaders/post-processing/invert.frag";
import sepia from "../shaders/post-processing/sepia.frag";
import sharpenFilter from "../shaders/post-processing/sharpenFilter.frag";
import sobelFilter from "../shaders/post-processing/sobelFilter.frag";
import vignette from "../shaders/post-processing/vignette.frag";
import pixelateFilter from "../shaders/post-processing/pixelateFilter.frag";

type PostProcessingEffect = {
  id: string;
  radioButtonLabel: string;
  shader?: string;
};

export const textureVertexShader = vertex;

export const fallbackShader = plainTexture;

export const postProcessingEffects: PostProcessingEffect[] = [
  {
    id: "none",
    radioButtonLabel: "No effect",
    shader: plainTexture,
  },
  {
    id: "boxBlur",
    radioButtonLabel: "Box Blur",
    shader: boxBlur,
  },
  {
    id: "gaussianBlur",
    radioButtonLabel: "Gaussian Blur",
    shader: gaussianBlur,
  },
  {
    id: "grayscale",
    radioButtonLabel: "Grayscale",
    shader: grayscale,
  },
  {
    id: "invert",
    radioButtonLabel: "Invert",
    shader: invert,
  },
  {
    id: "sepia",
    radioButtonLabel: "Sepia",
    shader: sepia,
  },
  {
    id: "sharpenFilter",
    radioButtonLabel: "Sharpen Filter",
    shader: sharpenFilter,
  },
  {
    id: "sobelFilter",
    radioButtonLabel: "Sobel Filter",
    shader: sobelFilter,
  },
  {
    id: "vignette",
    radioButtonLabel: "Vignette",
    shader: vignette,
  },
  {
    id: "pixelateFilter",
    radioButtonLabel: "Pixelate Filter",
    shader: pixelateFilter,
  },
];
