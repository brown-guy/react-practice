import React, { useState, createContext, useContext } from 'react'
import Component5 from './Component5';
export const UserContext = createContext();

function Component3() {
    const [user, setUser] = useState('Malik');
    return (
        <UserContext.Provider value={user}>
            <Component5 user={user} />
        </UserContext.Provider>
    )
}

export default Component3;