// let btn1 = document.getElementById("btn1");
// btn1.onclick = () => {
//     console.log("single Click!");
//     alert("Pressed single clicked button");
// };

// //Handle 1
// let btn2 = document.getElementById("btn2");
// btn2.ondblclick = () => {
//     console.log("Double Click!");
//     alert("Pressed double clicked button");
// };

// //Handle 2
// btn2 = document.getElementById("btn2");
// btn2.onmouseover = () => {
//     console.log("Double Click!");
//     alert("Pressed double clicked button");
// };

let modeBtn = document.querySelector("#modeButton");
let body = document.querySelector("body");
let currentMode = "light";

//Way 2
// modeBtn.addEventListener("click", () => {
//     if (currentMode === "light") {
//         currentMode = "dark";
//         body.style.backgroundColor = "black";
//     }
//     else {
//         currentMode = "light";
//         body.style.backgroundColor = "white"
//     }
// });

//Way 2
modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});

