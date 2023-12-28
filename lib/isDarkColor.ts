export function isDarkColor(hexColor: string): boolean {
  // Remove the '#' from the hex color string
  hexColor = hexColor.replace('#', '');

  // Convert the hex color to RGB values
  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the luminance of the color
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  // Check if the luminance is below a threshold (0.5) to determine if it is a dark color
  if (luminance < 0.5) {
    return true;
  } else {
    return false;
  }
}
