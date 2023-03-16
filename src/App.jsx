import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";
import Theme from "./components/Theme";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Theme />
      </div>
    </Provider>
  );
}

export default App;
