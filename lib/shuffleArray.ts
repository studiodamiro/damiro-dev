// This function uses the Fisher-Yates algorithm to shuffle the array.
// It creates an array from 1 to length, and then iterates over the array
// from the last element to the first, swapping each element with a randomly
// selected element before it. Finally, it returns the shuffled array.

export default function shuffleArray(length: number) {
  const array = Array.from({ length }, (_, index) => index + 1);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
