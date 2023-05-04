import React, { useState, useEffect } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>I have been clicked {count} times</button>
        </div>
    )
}

export default Count