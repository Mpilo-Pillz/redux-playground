import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";
import SearchLocationInput from "./components/SearchLocationInput";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <SearchLocationInput />
    </React.Fragment>
  );
}

export default App;
