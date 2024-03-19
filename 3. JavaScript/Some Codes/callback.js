// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 2000); 

function getData(dataId, getNextData) { //getNextData as callback
    console.log("Inside getData", dataId);
    setTimeout(() => {
        console.log("Inside setTimeOut");
        console.log("Data", dataId);
        console.log("value of getNextData:", getNextData);
        if (getNextData) {
            console.log("Inside if (getNextData)");
            getNextData();
        }
    }, 1000); //end of setTimeout
}

// getData(1, () => {
//     console.log("Preparing for next getData(2)");
//     getData(2);
// });

//Callback Hell
getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});