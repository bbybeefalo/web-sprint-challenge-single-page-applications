import { useState } from 'react';

function Form() {
const [pizza, setPizza] = useState({
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
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
    <div class="form-container">
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
        <label>Toppings:

        </label>
        <label>Special Instructions:
            <input
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