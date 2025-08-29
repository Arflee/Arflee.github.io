import vertex from "../shaders/post-processing/plainTexture.vert";
import plainTexture from "../shaders/post-processing/plainTexture.frag";
import boxBlur from "../shaders/post-processing/boxBlur.frag";
import gaussianBlur from "../shaders/post-processing/gaussianBlur.frag";

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
  },
  {
    id: "invert",
    radioButtonLabel: "Invert",
  },
  {
    id: "sepia",
    radioButtonLabel: "Sepia",
  },
  {
    id: "sharpenFilter",
    radioButtonLabel: "Sharpen Filter",
  },
  {
    id: "sobelFilter",
    radioButtonLabel: "Sobel Filter",
  },
  {
    id: "vignette",
    radioButtonLabel: "Vignette",
  },
  {
    id: "pixelateFilter",
    radioButtonLabel: "Pixelate Filter",
  },
];
