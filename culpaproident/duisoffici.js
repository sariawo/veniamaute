function cubehelix(hue) {
  let h = hue / 360;
  let r = 1 - (1 - (1 - h) * 0.69) * (1 - (1 - h) * 0.69);
  let g = (1 - h) * 0.77;
  let b = (1 - h) * 0.69;

  return [r, g, b];
}
