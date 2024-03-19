{///Simple Promise
    /*{ //Promise 
    function getData(dataId, nextData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data", dataId);
                resolve("Data Generated Successfully");
                // reject("your promise has some error");
                
                if (nextData) {
                    nextData();
                }
            }, 5000);
        });
    }
    
    // let data = getData(434);
    
    // getData(1, () => {
        //     getData(2);
        // });
    }*/
}


/*{ //Promise with Error handling then() and catch()
    function promise() {
        return new Promise((resolve, reject) => {
            console.log("Inside Promise");
            //Try one by one
            resolve("Success");
            // reject("error");
        });
    }
 
    let newPromise = promise();
    newPromise.then((result) => {
        console.log("Promise Fullfilled with status:", result);
    });
    newPromise.catch((error) => {
        console.log("Promise Rejected With status:", error);
    });
}
*/

function func1(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

// function func2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success");
//         }, 5000);
//     });
// }

{
    // { //1 way to do this:
    //     console.log("Fetching data1...");
    //     let promise1 = func1();
    //     promise1.then((result) => {
    //         // console.log("Inside then:", result);
    //         console.log("Fetching data2...");
    //         let promise2 = func2();
    //         promise2.then(() => { });
    //     });
    // }

    // { //2nd way to do above:
    //     console.log("Fetching data1...");
    //     func1().then((result) => {
    //         // console.log("Inside then:", result);
    //         console.log("Fetching data2...");
    //         func2().then(() => { });
    //     });
    // }
}

{
    //Promise Chain

    // { //1 way:
    //     func1(1).then((result) => {
    //         func1(2).then((result) => {
    //             console.log("Successful");
    //         });
    //     });
    // }

    // {//2nd way
    //     func1(1).then((result) => {
    //         return func1(2);
    //     }).then((result) => {
    //         console.log("Data Loaded with status:", result);
    //     });
    // }
}

{//Promise Chain
    func1(1).then((result) => {
        return func1(2);
    }).then((result) => {
        return func1(3);
    }).then((result) => {
        console.log("Data Loaded with status:", result);
    });
}