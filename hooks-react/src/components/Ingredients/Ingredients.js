import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/ingredients').then(response => response.json())
      .then((responseData) => {
        console.log("RespData-->", responseData);
        setUserIngredients(responseData)
      })
  }, [])

  const filteredIngredientsHandler = filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }

  const addIngredientHandler = (ingredient) => {
    fetch('http://localhost:1337/ingredients', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      return response.json();
    }).then((responseData) => setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: responseData.id, ...ingredient },
    ]))
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
