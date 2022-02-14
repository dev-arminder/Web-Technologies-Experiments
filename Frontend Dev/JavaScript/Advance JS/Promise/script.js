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

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(result => {
//     console.log(result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log(result);
//     throw new Error("Whoops");
//     return result * 2;
//   })
//   .catch(error => {
//     console.log("We are inside Catch block");
//     throw new Error("Whoops");
//     console.log(error);
//   })
//   .then(result => {
//     console.log(result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log(result);
//     return result * 2;
//   })
//   .catch(error => {
//     console.log("We are Last inside Catch block");

//     console.log(error);
//   });

// Promise API

// Promise.all()
// let promise = Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]);
// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(`Hurray we have an ${err}`);
//   });

// Promise.allSettled()
// let promise = Promise.allSettled([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]);
// promise.then(result => {
//   console.log(result);
// });

// // Promise.race()
// let promise = Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]);
// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     console.log(result);
//   });

// Promise.any()
let promise = Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(1), 0)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]);
promise
  .then(result => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  });
