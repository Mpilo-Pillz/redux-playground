import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '' : `?title=${enteredFilter}`
        fetch(`http://localhost:1337/ingredients${query}`).then(response => response.json())
          .then((responseData) => {
            console.log("RespData-->", responseData);
            const loadedIngredients = [];
            for (const key in responseData) {
              console.log("key-->", key);
              loadedIngredients.push({
                id: responseData[key].id,
                title: responseData[key].title,
                amount: responseData[key].amount
              })
            }
            onLoadIngredients(loadedIngredients)
            // setEnteredFilter(responseData)
            // onLoadIngredients(responseData)
          })
      }

    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, onLoadIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
