export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const vaLue of array) {
    newArray.push(appendString + vaLue);
  }

  return newArray;
}
