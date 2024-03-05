export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const test = 1 + 2;
    if (test === 3) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
}
