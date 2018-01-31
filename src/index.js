import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducers from "./stores/reducers.js"
import middleware from "./stores/middleware.js";

import Router from "./components/router.js";

const store = createStore(reducers, middleware);
const App = (
  <Provider store={store}> 
    <Router /> 
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
