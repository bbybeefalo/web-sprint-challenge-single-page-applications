import { useState } from 'react';
import axios from 'axios';

function Form() {
const [pizza, setPizza] = useState([])
const [newOrder, setNewOrder] = useState({
    name: '',
    size: '',
    pepperoni: false,
    onion: false,
    bacon: false,
    mushrooms: false,
    special: ''
});

 const onChange = evt => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value
    console.log('Butts and butts', valueToUse)
    setNewOrder({...newOrder, [name]: valueToUse});
    console.log(newOrder)
 }

 const onSubmit = evt => {
    evt.preventDefault();
    //  setPizza({
    //     name: newOrder.name,
    //     size: newOrder.size,
    //     pepperoni: newOrder.pepperoni,
    //     onion: newOrder.onion,
    //     bacon: newOrder.bacon,
    //     mushrooms: newOrder.mushrooms,
    //     special: newOrder.special
    // })
    console.log(newOrder);
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.err(err)
    })
    setNewOrder(newOrder)
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
        <label>Special Instructions:
            <input
            id="special-text"
            type="text"
            name="special"
            placeholder="Special instructions?"
            value={newOrder.special}
            onChange={onChange} />
        </label>
        <input type="submit" value="Add to order!" />
    </form>
    </div>
);
} 

export default Form