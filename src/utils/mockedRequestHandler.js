export const mockedRequestHandler = (dataToReturn) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (dataToReturn) {
      resolve({ data: dataToReturn });
    } else {
      reject(new Error('something bad happened'));
    }
  }, 1000)
});
