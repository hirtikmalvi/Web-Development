import styles from "./ButtonsContainer.module.css";

const ButtonContainer = ({ buttonClickHandleFunc }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "*",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            className={styles.button}
            onClick={(event) => {
              buttonClickHandleFunc(buttonName, event);
            }}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
