// Create a Promise
// let promise = new Promise(function(resolve, reject) {
//   // the function is executed automatically when the promise is constructed
//   console.log("Inside Promise");
//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 0);
// });
// promise.then(result => {
//   alert("Result");
// });

// Prmosise Chaining
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolve First Time");
//   }, 1000);
// })
//   .then(result => {
//     console.log(result);
//     return "Resolve Second Time";
//   })
//   .then(result => {
//     console.log(result);
//     return "Resolve Third Time";
//   });

// const PromiseHandler = (resolve, reject, result) => {
//   setTimeout(() => {
//     resolve(result * 2);
//   }, 1000);
// };

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(result => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       PromiseHandler(resolve, reject, result * 2)
//     );
//   })
//   .then(result => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       PromiseHandler(resolve, reject, result * 2)
//     );
//   })
//   .then(result => {
//     console.log(result);
//     return new Promise((resolve, reject) =>
//       PromiseHandler(resolve, reject, result * 2)
//     );
//   });

// Error Handling With Promises

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then(result => {
    console.log(result);
    return result * 2;
  })
  .then(result => {
    console.log(result);
    throw new Error("Whoops");
    return result * 2;
  })
  .catch(error => {
    console.log("We are inside Catch block");
    throw new Error("Whoops");
    console.log(error);
  })
  .then(result => {
    console.log(result);
    return result * 2;
  })
  .then(result => {
    console.log(result);
    return result * 2;
  })
  .catch(error => {
    console.log("We are Last inside Catch block");

    console.log(error);
  });
