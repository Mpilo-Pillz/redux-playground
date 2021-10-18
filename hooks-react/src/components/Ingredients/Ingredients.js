import React, { useEffect, useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:1337/ingredients').then(response => response.json())
  //     .then((responseData) => {
  //       console.log("RespData-->", responseData);
  //       setUserIngredients(responseData)
  //     })
  // }, [])


  // app got into a rerenderloop so we cache this function so it survives re-render cycles
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }, [])

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

  const removeIngredientHandler = ingredientId => {
    fetch(`http://localhost:1337/ingredients/${ingredientId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
      })
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
        {/* <IngredientList ingredients={userIngredients} onRemoveItem={(id) => console.log("DEL--->", id)} /> */}
      </section>
    </div>
  );
}

export default Ingredients;
