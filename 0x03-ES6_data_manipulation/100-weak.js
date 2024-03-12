export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  let counter = weakMap.get(endPoint) || 0;
  counter += 1;

  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endPoint, counter);
  }
}
