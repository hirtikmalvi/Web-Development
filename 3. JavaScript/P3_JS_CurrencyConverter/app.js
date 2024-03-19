const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropDowns = document.querySelectorAll(".dropdown select");
let exchangeRateButton = document.querySelector("#exchangeRate");
let fromCurrency = "USD"; //Default value at start only (changed later on)
let toCurrency = "INR"; //Default value at start only (changed later on)

for (let select of dropDowns) {
    select.addEventListener("change", (event) => {
        updataFlag(event.target);
    });
}

const updataFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];

    if (element.name === "from") {
        fromCurrency = currencyCode;
    }
    else {
        toCurrency = currencyCode;
    }

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

let exchangeRateFunction = async () => {
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 0) {
        amountValue = 1;
        amount.value = amountValue;
    }

    const URL = `${BASE_URL}/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let exchangeRate = data[toCurrency.toLowerCase()];
    let finalAmount = exchangeRate * amountValue;
    document.querySelector("#finalAnswer").innerText = `${amountValue} ${fromCurrency} = ${finalAmount} ${toCurrency}`;
}


exchangeRateButton.addEventListener("click", async (event) => {
    event.preventDefault();
    exchangeRateFunction();
});

window.addEventListener("load", () => {
    exchangeRateFunction();
});

