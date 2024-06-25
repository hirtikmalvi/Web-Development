import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((myntraStore) => myntraStore.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemActions.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort;
    };
  }, [fetchStatus]);

  return;
};

export default FetchItems;
