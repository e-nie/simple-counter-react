import React, { useState } from 'react';


const Counter = () => {
    const [counts, setCounts] = useState(0);
    const decrement = () => {
        setCounts(counts - 1);
    };

    const increment = () => {
        setCounts(counts + 1);
    };

    const reset = () => {
        setCounts(0)
    };
    return (
        <div>
            <h1>{ counts }</h1>


            <button onClick = { decrement }>Decrement</button>
            <button onClick = { increment }>Increment</button>
            <button onClick = { reset }>Reset</button>
        </div>
    );
};

export default Counter;