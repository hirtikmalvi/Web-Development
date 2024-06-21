import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterValue = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter Current Value: {counterValue}</p>;
};

export default DisplayCounter;
