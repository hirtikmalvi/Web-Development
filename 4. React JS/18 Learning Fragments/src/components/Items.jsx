import styles from './Items.module.css'

let Items = ({ foodItem, bought, handleBuyButtonFunc }) => {

    // handleBuyButtonFunc is passed by parent(FoodItems) to the child(Items)

    return (
        <>
            <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
                {/* {console.log(bought && 'active')} */}
                <span className={`${styles["kg-span"]}`}>{foodItem}</span>
                <button type="button" className={`${styles.button} btn btn-info`}
                    onClick={handleBuyButtonFunc}>
                    Buy</button>
            </li >
        </>
    );
}

export default Items;