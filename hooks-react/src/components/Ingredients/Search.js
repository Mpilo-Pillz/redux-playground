import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '' : `?title=${enteredFilter}`
        sendRequest(`http://localhost:1337/ingredients${query}`, 'GET')
        // fetch(`http://localhost:1337/ingredients${query}`).then(response => response.json())
        //   .then((responseData) => {
        //     console.log("RespData-->", responseData);
        //     const loadedIngredients = [];
        //     for (const key in responseData) {
        //       console.log("key-->", key);
        //       loadedIngredients.push({
        //         id: responseData[key].id,
        //         title: responseData[key].title,
        //         amount: responseData[key].amount
        //       })
        //     }
        //     onLoadIngredients(loadedIngredients)
        //     // setEnteredFilter(responseData)
        //     // onLoadIngredients(responseData)
        //   })
      }


    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, inputRef, sendRequest])

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        console.log("key-->", key);
        loadedIngredients.push({
          id: data[key].id,
          title: data[key].title,
          amount: data[key].amount
        })
      }
      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
