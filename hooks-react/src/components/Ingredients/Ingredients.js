import React, { useEffect, useState, useReducer, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from '../UI/ErrorModal';

// reducers are functions that take some input and return som outpur
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;

    case 'ADD':
      return [...currentIngredients, action.ingredient];

    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);

    default:
      throw new Error('Should never get here please handle all cases')
  }
}

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]);
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
    dispatch({ type: 'SET', ingredients: filteredIngredients })
    // setUserIngredients(filteredIngredients)
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
    }).then((responseData) => {
      dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } })
    })

    // .then((responseData) => setUserIngredients((prevIngredients) => [
    //   ...prevIngredients,
    //   { id: responseData.id, ...ingredient },
    // ]))
  };

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    fetch(`http://localhost:1337/ingredients/${ingredientId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong");
          setIsLoading(false);
        }
        setIsLoading(false);
        dispatch({ type: 'DELETE', id: ingredientId })
        // setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
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
