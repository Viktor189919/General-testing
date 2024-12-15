// function delayMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello, world!")
//         }, 2000)   
//     })
// }

// delayMessage()
//     .then(data => {
//         console.log(data);
//     })

// function stepOne() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 1 completed")
//         })
//     },1000)
// }

// function stepTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 2 completed")
//         })
//     },1000)
// }

// function stepThree() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 3 completed")
//         })
//     },1000)
// }

// stepOne()
//     .then(stepOnedata => {
//         console.log(stepOnedata);
//         return stepTwo();
//     })
//     .then(stepTwodata => {
//         console.log(stepTwodata)
//         return stepThree();
//     })
//     .then(stepThreedata => console.log(stepThreedata))

// const randomFailure = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randInt = Math.random()
//             if (randInt < 0.5) {
//                 resolve("Resolved")
//             } else {
//                 reject("Rejected")
//             }
//         }, 1000)
//     })
// }

// const randFail = async () => {

//     try {
//         const resolution = await randomFailure();
//         return resolution;

//     } catch(rejection) {
//         return rejection;
//     }
// }

// randomFailure()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// randFail()
//     .then(resolution => console.log(resolution))
//     .catch(rejection => console.log(rejection))

// function fakeApiCall() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randInt = Math.floor(Math.random() * 100)
            
//         })
//     })
// }

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({id: 1, namE: "John Doe"})
//         },1000)
//     })
// }

// function fetchUserPost(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 1) {
//                 resolve({Posts: {1: "Hi, my name is John Doe", 2: "Fuck off"}})
//             }
//         }, 1000)
//     })
// }

// fetchUser()
//     .then(user => {
//         console.log(user);
//         return user.id
//     })
//     .then(userId => fetchUserPost(userId))
//      .then(posts => console.log(posts))

// function fetchDataA() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 100))
//         }, 1000)
//     })
// }

// function fetchDataB() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 100))
//         }, 2000)
//     })
// }

// function fetchDataC() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 100))
//         }, 1500)
//     })
// }

// Promise.all([fetchDataA(), fetchDataB(), fetchDataC()])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => console.log(error))

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved")
//     }, 1000)
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved")
//     }, 1500)
// })

// Promise.race([promiseOne, promiseTwo]) 
//     .then(first => console.log(first))

