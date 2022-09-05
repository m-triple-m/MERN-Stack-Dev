import React, { useState } from 'react'

const EventHandling = () => {
    
    const [count, setCount] = useState(1);
  
    let cartItem = 10;

    const handleClick = () => {
        console.log('Clicked');
    }

    const addToCart = () => {
      cartItem++;
      console.log(cartItem);
    }

    const updateState = () => {
      // count++; ❌
      setCount(count + 5); // ✅
    }
    
  return (
    <div className='container mt-5'>
        <h1 className='text-center display-4'>Event Handling</h1>
        <hr />

        <h4>Click Event</h4>
        <button className='btn btn-primary' onClick={ () => { alert('Nice you clicked that button') } } >Click to See</button>
        <button className='btn btn-danger' onClick={handleClick}>Another Click Event</button>

        <h4>State Management</h4>
        <button className='btn btn-success' onClick={addToCart}>Add Item to Cart</button>
        <h1>{cartItem}</h1>

        <button className='btn btn-warning' onClick={updateState}>Update State</button>
        <h1>{count}</h1>

        

    </div>
  )

}

export default EventHandling;