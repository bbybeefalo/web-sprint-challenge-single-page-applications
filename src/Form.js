import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

function Form() {
    const [errors, setErrors] = useState({
        name: '',
        size: '',
        pepperoni: '',
        onion: '',
        bacon: '',
        mushrooms: '',
        special: ''
    })
    const [newOrder, setNewOrder] = useState({
        name: '',
        size: '',
        pepperoni: false,
        onion: false,
        bacon: false,
        mushrooms: false,
        special: ''
    });

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value
        setFormErrors(name, valueToUse)
        setNewOrder({ ...newOrder, [name]: valueToUse });
        
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(newOrder);
        axios.post("https://reqres.in/api/orders", newOrder)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.err(err)
            })
        setNewOrder({
            name: '',
            size: '',
            pepperoni: false,
            onion: false,
            bacon: false,
            mushrooms: false,
            special: ''
        })
    }

    return (
        <div className="form-container">
            <div>
                {errors.name}
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Name:
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={newOrder.name}
                        onChange={onChange}
                    />
                </label>
                <label>Size:
                    <select
                        value={newOrder.size}
                        name="size"
                        id="size-dropdown"
                        onChange={onChange}>
                        <option value="">--Select Size--</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <div className='topping-box'>
                    <h3>Toppings:</h3>
                    <label>Pepperoni:
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={newOrder.pepperoni}
                            onChange={onChange} />
                    </label>
                    <label>Onion:
                        <input
                            type="checkbox"
                            name="onion"
                            checked={newOrder.onion}
                            onChange={onChange} />
                    </label>
                    <label>Bacon:
                        <input
                            type="checkbox"
                            name="bacon"
                            checked={newOrder.bacon}
                            onChange={onChange} />
                    </label>
                    <label>Mushrooms:
                        <input
                            type="checkbox"
                            name="mushrooms"
                            checked={newOrder.mushrooms}
                            onChange={onChange} />
                    </label>
                </div>
                <label>Special Instructions:
                    <input
                        id="special-text"
                        type="text"
                        name="special"
                        placeholder="Special instructions?"
                        value={newOrder.special}
                        onChange={onChange} />
                </label>
                <input id="order-button" type="submit" value="Add to order!" />
            </form>
        </div>
    );
}

export default Form