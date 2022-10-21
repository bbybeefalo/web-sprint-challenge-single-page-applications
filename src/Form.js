import { useState } from 'react';
import axios from 'axios';

function Form() {
const [pizza, setPizza] = useState({
    name: '',
    size: '',
    pepperoni: false,
    onion: false,
    bacon: false,
    mushrooms: false,
    special: ''
})
const [newOrder, setNewOrder] = useState([]);

const onChange = evt => {
    const name = evt.target.name;
    const {value} = evt.target;
    setPizza({...pizza, [name]: value});
}

const onSubmit = evt => {
    evt.preventDefault();

}    

return (
    <div className="form-container">
    <form id="pizza-form" onSubmit={onSubmit}>
        <label>Name:
            <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={pizza.name}
            onChange={onChange}
            />
        </label>
        <label>Size:
            <select 
            value={pizza.size} 
            name="size" 
            id="size-dropdown"
            onChange={onChange}>
                <option value="">--Select Size--</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        </label>
        <h3>Toppings:</h3>
        <label>Pepperoni:
            <input
            type="checkbox"
            name="pepperoni"
            checked={pizza.pepperoni}
            onChange={onChange} />
        </label>
        <label>Onion:
            <input
            type="checkbox"
            name="onion"
            checked={pizza.onion}
            onChange={onChange} />
        </label>
        <label>Bacon:
            <input
            type="checkbox"
            name="bacon"
            checked={pizza.bacon}
            onChange={onChange} />
        </label>
        <label>Mushrooms:
            <input
            type="checkbox"
            name="mushrooms"
            checked={pizza.mushrooms}
            onChange={onChange} />
        </label>
        <label>Special Instructions:
            <input
            id="special-text"
            type="text"
            name="special"
            placeholder="Special instructions?"
            value={pizza.special}
            onChange={onChange} />
        </label>
        <input type="submit" value="Order!" />
    </form>
    </div>
);
} 

export default Form