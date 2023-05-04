import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const id = useSelector((state) => state.username);
    const pass = useSelector((state) => state.password);

    console.log(id)

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id.password)
        if (name === id && password === pass) {

            console.log(dispatch({ type: 'login' }))
        }

    }
    return (
        <div>Login
            <form onSubmit={handleSubmit} >
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default Login