//Async function returns a Promise
//Await can only be used inside Async

function Data(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

{//1st way with extra function name getData()
    async function getData() {
        //Each of the following waits for previous function.
        await Data(1);
        await Data(2); //Waits till Data(1) to execute and after it executes
        await Data(3); //Same for all the following
        await Data(4);
        await Data(5);
        await Data(6);
    }

    let gD = getData();
}


// {//2nd way without any function name using IIFE
//     //Executes immediately (IIFE: Immediately Invoked Function Expression)

//     (async function () {
//         //Each of the following waits for previous function.
//         await Data(1);
//         await Data(2); //Waits till Data(1) to execute and after it executes
//         await Data(3); //Same for all the following
//         await Data(4);
//         await Data(5);
//         await Data(6);
//     })();
// }