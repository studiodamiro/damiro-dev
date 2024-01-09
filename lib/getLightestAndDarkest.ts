type ColorArray = string[];

export function getLightestAndDarkest(colors: ColorArray): [string, string] {
  const lightestColor = colors.reduce((acc, color) => {
    return color > acc ? color : acc;
  }, colors[0]);

  const darkestColor = colors.reduce((acc, color) => {
    return color < acc ? color : acc;
  }, colors[0]);

  return [lightestColor, darkestColor];
}
