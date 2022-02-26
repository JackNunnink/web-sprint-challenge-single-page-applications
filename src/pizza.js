import React from "react";

export default function PizzaForm(props) {
    const {  submit, errors, change } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit(evt);
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <div>
            <h1>Order Here</h1>
            <p>{errors.name}</p>
            <form id="pizza-form" onSubmit={onSubmit}>
                
                <label>Name
                    <input 
                        id="name-input"
                        name="name"
                        type="text"
                        onChange={onChange}
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

                <input type="submit" id="order-button" value="Order" />
            </form>
        </div>
    )
    
}