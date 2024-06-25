import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import EmptyBagMessage from "../components/EmptyBagMessage";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.length > 0 ? (
              finalItems.map((item) => <BagItem item={item} />)
            ) : (
              <EmptyBagMessage />
            )}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
