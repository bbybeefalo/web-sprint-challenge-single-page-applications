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

return (
    <form id="pizza-form">
        <label>Name:
            <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={pizza.name}
            />
        </label>
        <label>Size:
            <select value={pizza.size} name="size">
                <option value="">--Select Size--</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        </label>
    </form>
);
} 

export default Form