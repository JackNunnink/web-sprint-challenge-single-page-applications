import React, { useState } from "react";
import PizzaForm from "./pizza";
import axios from "axios";
import * as yup from 'yup';
import schema from './pizza_schema';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res => {
        setPizza([ res.data, ...pizza ])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = (event) => {
    const newOrder = {
      name: event.target.elements.name.value,
      sizes: event.target.elements.sizes.value,
      toppings: ['pepperoni', 'pineapple', 'sausage', 'mushrooms'].filter(topping => !!formValues[topping]),
      special: event.target.elements.specialText.value
    }
    postNewOrder(newOrder);
  }
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Order our delicious pizza</p>
      <Router>
        {/* <Link id="order-pizza" to="/pizza">Order pizza</Link> */}
        <a href="/pizza" id="order-pizza">Order Pizza</a>
        <Switch>
          <Route path="/pizza">
            <PizzaForm 
              submit={formSubmit}
              errors={formErrors}
              change={inputChange}
            />
          </Route>
          <Route path="/">
            HOME
          </Route>
        </Switch>
      </Router>
      {/* {
        pizza.map(pizza => (
          <div key={pizza.id}>
            <p>name: {pizza.name}</p>
            <p>size: {pizza.sizes}</p>
            <p>toppings: {pizza.toppings}</p>
            <p>special: {pizza.specialText}</p>
          </div>
        ))
      } */}
      {/* <button id="order-pizza" onClick={() => history.push('/pizza')}>Order Pizza</button> */}
    </>
  );
};



export default App;
