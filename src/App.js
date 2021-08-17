import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {Checkout} from "./Checkout.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div class="bg-purple-100">
<Router>
    <Switch>
         <Route path="/home">

         </Route>
         <Route path="/checkout">
        <Checkout/>
         </Route>
         <Route path="*">
          <Counter />
         </Route>
       </Switch>

   </Router>



    </div>
  );
}

export default App;
