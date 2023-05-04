import { useState, createContext, useContext } from "react";
// import Component3 from './Component3';
import { UserContext } from "./Component3";

function Component5() {
    const user = useContext(UserContext);
    return (
        <div>{user} again
        </div>
    )
}

export default Component5