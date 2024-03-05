export default function handleResponseFromAPI(promise) {
  return promise
    // Explicitly identify and handle the successful resolution of the Promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    // if the Promise is rejected ctach handles errors
    .catch(() => {
      const error = new Error();
      return error;
    });
}
