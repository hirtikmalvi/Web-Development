let para = document.querySelector("#fact");
let btn = document.querySelector("#btn");

let URL = "https://cat-fact.herokuapp.com/facts";


const getFacts = async () => {
    //fetch(URL) returns JSON (Not but same as JS Object) as promise as a response
    let response = await fetch(URL); //JSON Format
    console.log(response);
    //json() returns JS Object as promise as a response
    let data = await response.json(); //JS Object format: JSON to JS Object
    para.innerText = data[0].text;

}

btn.addEventListener("click", getFacts);
