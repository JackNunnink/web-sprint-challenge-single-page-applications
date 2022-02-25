import React, { useState } from "react";
import PizzaForm from "./pizza";
import axios from "axios";
import * as yup from 'yup'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const initialValues = {
  name: '',
  sizes: '',
  pepperoni: false,
  pineapple: false,
  sausage: false,
  mushrooms: false,
  specialText: ''
}

const initialErrors = {
  name: ''
}

const App = () => {
  // const history = useHistory();

  const [pizza, setPizza] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const postNewOrder = () => {
    axios.post(`https://reqres.in/api/orders`)
      .then(res => {
        console.log(res)
      }).catch(err => console.error(err))
  }
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Order our delicious pizza</p>
      <Router>
        <Link id="order-pizza" to="/pizza">Order pizza</Link>
        <Switch>
          <Route path="/pizza">
            <PizzaForm />
          </Route>
          <Route path="/">
            HOME
          </Route>
        </Switch>
      </Router>
      {/* <button id="order-pizza" onClick={() => history.push('/pizza')}>Order Pizza</button> */}
    </>
  );
};



export default App;
