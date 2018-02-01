import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';

import reducers from "./stores/reducers.js"
import middleware from "./stores/middleware.js";
import Router from "./components/router";

const store = createStore(reducers);
const App = () => (
  <Provider store={store}> 
    <BrowserRouter>
      <Router />
    </BrowserRouter>  
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
