import React, { useEffect, useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from '../UI/ErrorModal';


function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
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
    setIsLoading(true)
    fetch('http://localhost:1337/ingredients', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      setIsLoading(false)
      return response.json();
    }).then((responseData) => setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: responseData.id, ...ingredient },
    ]))
  };

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    fetch(`http://localhost:13337/ingredients/${ingredientId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setIsLoading(false);
        setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
      }).catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }
  const clearError = () => {
    setError(null);
  }
  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
        {/* <IngredientList ingredients={userIngredients} onRemoveItem={(id) => console.log("DEL--->", id)} /> */}
      </section>
    </div>
  );
}

export default Ingredients;
