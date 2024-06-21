import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let fruitList = ["Apple", "Mango", "Watermelon", "Grapes", "Orange", "Kiwi"];
  // let fruitList = [];

  let [foodList, setfoodList] = useState([]);

  let onKeyDownFunc = (event) => {
    let newFoodItem = event.target.value;

    if (event.key === "Enter" && (newFoodItem != "")) {
      let newItems = [...foodList, newFoodItem];
      setfoodList(newItems);
      event.target.value = ""; //To Clear the Input box
    }
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodList}></ErrorMessage>
        <FoodInput onKeyDownFunc={onKeyDownFunc}></FoodInput>
        <FoodItems items={foodList}></FoodItems>
      </Container>
    </>
  );
}

export default App;