import React from "react";
import H1bar from "./components/H1bar";

function App() {
  const value = "World";
  return (
    <div>
      <span>Hello {value}</span>
      <H1bar greeting='A bigger hello' another='hellloooo'></H1bar>
    </div>
  );
}

export default App;
