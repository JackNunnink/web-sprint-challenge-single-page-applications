import React from "react";

export default function PizzaForm(props) {
    
    return(
        <form id="pizza-form">
            <label>Name
                <input 
                    id="name-input"
                    name="name"
                    type="text"
                />
            </label>

            <label>Sizes
                <select 
                    id="size-dropdown"
                    name="sizes"
                >
                    <option value="">Select A Size</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>
            </label>

            <div className="toppings">
                <h4>Toppings</h4>

                <label>Pepperoni
                    <input 
                        type="checkbox"
                        id="pepperoni"
                        name="pepperoni"
                    />
                </label>

                <label>Pineapple
                    <input 
                        type="checkbox"
                        id="pineapple"
                        name="pineapple"
                    />
                </label>

                <label>Sausage
                    <input 
                        type="checkbox"
                        id="sausage"
                        name="sausage"
                    />
                </label>

                <label>Mushrooms
                    <input 
                        type="checkbox"
                        id="mushrooms"
                        name="mushrooms"
                    />
                </label>
            </div>

            <label>Special Instructions
                <input 
                    type="text"
                    id="special-text"
                    name="specialText"
                />
            </label>

            <button id="order-button">Order</button>
        </form>
    )
    
}