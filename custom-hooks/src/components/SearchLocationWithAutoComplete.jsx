import React from "react";
import { Search, GpsFixed } from "@material-ui/icons";

const SearchLocationWithAutoComplete = () => {
  return (
    <>
      <div className="search">
        <span>
          <Search />
        </span>
        <input type="text" placeholder="Search Location..." />
        <button>
          <GpsFixed />
        </button>
      </div>
      <div>
        <p>City: </p>
        <p>Province: </p>
        <p>Counrty: </p>
        <p>Postal code: </p>
      </div>
    </>
  );
};

export default SearchLocationWithAutoComplete;
