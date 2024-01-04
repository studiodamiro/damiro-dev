export default function getRandomRotation(range: number) {
  const min = -range;
  const max = range;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
