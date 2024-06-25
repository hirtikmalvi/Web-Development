import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const itemFound = bagItems.indexOf(item.id) >= 0;
  // console.log(itemFound);

  const handleAddToBagBtn = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };

  const handleRemoveFromBagBtn = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemoveFromBagBtn}
        >
          Remove from Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBagBtn}
        >
          Add to bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
