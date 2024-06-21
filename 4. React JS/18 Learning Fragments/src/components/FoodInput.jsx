import styles from "./FoodItem.module.css";

let FoodInput = ({ onKeyDownFunc }) => {

    // onChangeFunc is Passed by parent(App) to the child(FoodInput)

    return (
        <>
            <input className={styles.inputFoodItem} type="text" placeholder="Enter Food Item..."
                onKeyDown={onKeyDownFunc}
            />
            {/* <p className={styles.inputFoodItem}>{textToShow}</p> */}
        </>
    )
}

export default FoodInput;