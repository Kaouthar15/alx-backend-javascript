export default function hasValuesFromArray(set, arr) {
  return arr.every((num) => set.has(num));
}
