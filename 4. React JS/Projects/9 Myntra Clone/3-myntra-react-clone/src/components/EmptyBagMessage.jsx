import { Link } from "react-router-dom";

const EmptyBagMessage = () => {
  return (
    <div className="alert alert-light empty-message" role="alert">
      <h1>Bag is Empty!</h1>
      <Link to="/" className="alert-link">
        Click here to add an item!
      </Link>
    </div>
  );
};
export default EmptyBagMessage;
