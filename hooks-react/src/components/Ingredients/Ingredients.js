import React, { useEffect, useState, useReducer, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from '../UI/ErrorModal';
import useHttp from "../../hooks/http";

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
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp();
  // const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // useEffect(() => {
  //   fetch('http://localhost:1337/ingredients').then(response => response.json())
  //     .then((responseData) => {
  //       console.log("RespData-->", responseData);
  //       setUserIngredients(responseData)
  //     })
  // }, [])

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra })
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra }
      })
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error])


  // app got into a rerenderloop so we cache this function so it survives re-render cycles
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: 'SET', ingredients: filteredIngredients })
    // setUserIngredients(filteredIngredients)
  }, [])

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest('http://localhost:1337/ingredients', 'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    )
    // setIsLoading(true)
    // dispatchHttp({ type: 'SEND' }) // no need to specify this as a dependency for useCallback becuase it does not change between render cycles as it is managed by react
    // fetch('http://localhost:1337/ingredients', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { "Content-Type": "application/json" }
    // }).then(response => {
    //   // setIsLoading(false)
    //   dispatchHttp({ type: 'RESPONSE' })
    //   return response.json();
    // }).then((responseData) => {
    //   dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } })
    // })

    // .then((responseData) => setUserIngredients((prevIngredients) => [
    //   ...prevIngredients,
    //   { id: responseData.id, ...ingredient },
    // ]))
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId => {
    sendRequest(`http://localhost:1337/ingredients/${ingredientId}`,
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT'
    )
    // setIsLoading(true);
    // dispatchHttp({ type: 'SEND' })
    // fetch(`http://localhost:1337/ingredients/${ingredientId}`, {
    //   method: 'DELETE',
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       // setError("Something went wrong");
    //       dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' })
    //       // setIsLoading(false);
    //     }
    //     // setIsLoading(false);
    //     dispatchHttp({ type: 'RESPONSE' })
    //     dispatch({ type: 'DELETE', id: ingredientId })
    //     // setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
    //   }).catch(error => {
    //     // setError(error.message);
    //     // setIsLoading(false);
    //     dispatchHttp({ type: 'ERROR', errorMessage: error.message })
    //   })
  }, [sendRequest])

  const clearError = useCallback(() => {
    clear()
    // setError(null);
    // dispatchHttp({ type: 'CLEAR' })
  }, [])

  const ingredientList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
  }, [userIngredients, removeIngredientHandler]) // remove ingredient handler is an optional dependency only becuase it wont rerender because it is already wrapped in a use callback
  return (
    <div className="App">
      {/* {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>} */}
      {/* <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} /> */}
      {/* {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>} */}
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
        {/* <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} /> */}
        {/* <IngredientList ingredients={userIngredients} onRemoveItem={(id) => console.log("DEL--->", id)} /> */}
      </section>
    </div>
  );
}

export default Ingredients;
