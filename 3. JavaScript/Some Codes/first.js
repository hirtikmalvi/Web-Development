// console.log(document);
// console.dir(document.getElementsByTagName("p"));
// let firstEll = document.querySelector(".myBox");
// let firstEll = document.querySelector("div");
// let allEll = document.querySelectorAll(".myBox");
// console.log(firstEll);
// console.log(allEll);
// console.log(firstEll.tagName);
// let inText = document.querySelector("div");
// console.log(document.querySelector("div").innerText);
// console.log(document.querySelector("div").innerHTML);
// console.log(document.querySelector("div").textContent);

// console.dir(document.body.children[0]);
// console.dir(document.body.firstElementChild);
// console.dir(document.body.lastElementChild);

// let atr = firstEll.getAttribute("class");
// console.log(atr);

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText = h2.innerText + " from Hirtik Malvi"

let newButton = document.createElement("button");
newButton.innerText = "Click Me!";

document.querySelector("body").prepend(newButton);
newButton.style.backgroundColor = "red";
newButton.style.color = "white";


