import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const buttonClickHandleFunc = (buttonName, event) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <center className={`${styles.calculator}`}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer
          buttonClickHandleFunc={buttonClickHandleFunc}
        ></ButtonContainer>
      </center>
    </>
  );
}

export default App;
