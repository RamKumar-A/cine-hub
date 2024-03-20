export function convertToMultipleArrays(originalArray, subArraySize) {
  const result = [];
  for (let i = 0; i < originalArray.length; i += subArraySize) {
    result.push(originalArray.slice(i, i + subArraySize));
  }

  return result;
}
