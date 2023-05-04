import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div>Counter
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>

    )
}

export default Counter