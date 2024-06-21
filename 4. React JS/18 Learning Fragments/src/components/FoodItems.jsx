import { useState } from "react";
import Items from "./Items";

let FoodItems = ({ items }) => {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) => {

        console.log(`${item} clicked.`)
        console.log(`${event.target} Event.`)
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <>
            <ul className="list-group">
                {
                    items.map((item) =>
                        <Items key={item} foodItem={item}
                            bought={activeItems.includes(item)}
                            handleBuyButtonFunc={(event) => onBuyButton(item, event)}
                        ></Items>
                    )
                }
            </ul>
        </>
    );
}

export default FoodItems;