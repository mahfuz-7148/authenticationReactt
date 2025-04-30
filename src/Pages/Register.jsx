import React, {use} from 'react';
import {Link} from "react-router";
import {AuthContext} from "../Contexts/AuthContext.jsx";

const Register = () => {
    const {createUser} = use(AuthContext)

    const formRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
            console.log(result)

        }).catch(error => {
            console.log(error)

        })

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
            <h1 className='text-3xl font-bold text-center mt-5'>Register now !!</h1>
            <div className="card-body">
                <form onSubmit={formRegister} className='fieldset'>
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please
                    <Link className='text-lg ml-2 underline text-blue-600' to='/login'>Login now !!</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;