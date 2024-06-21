import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: true,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type == "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type == "ADDITION") {
    newStore = {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type == "SUBTRACT") {
    newStore = {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type == "PRIVACY_TOGGLE") {
    newStore = {
      ...store,
      privacy: !store.privacy,
    };
  }
  return newStore;
};

//This also works fine!
/*const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  }
  return store;
};*/

const counterStore = createStore(counterReducer);

export default counterStore;
