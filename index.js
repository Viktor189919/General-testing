function delayMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!")
        }, 2000)   
    })
}

delayMessage()
    .then(data => {
        console.log(data);
    })

function stepOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1 completed")
        })
    },1000)
}

function stepTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 2 completed")
        })
    },1000)
}

function stepThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 3 completed")
        })
    },1000)
}

stepOne()
    .then(stepOnedata => {
        console.log(stepOnedata);
        return stepTwo();
    })
    .then(stepTwodata => {
        console.log(stepTwodata)
        return stepThree();
    })
    .then(stepThreedata => console.log(stepThreedata))

const randomFailure = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randInt = Math.random()
            if (randInt < 0.5) {
                resolve("Resolved")
            } else {
                reject("Rejected")
            }
        }, 1000)
    })
}

const randFail = async () => {

    try {
        const resolution = await randomFailure();
        return resolution;

    } catch(rejection) {
        return rejection;
    }
}

randomFailure()
    .then(data => console.log(data))
    .catch(error => console.log(error))

randFail()
    .then(resolution => console.log(resolution))
    .catch(rejection => console.log(rejection))