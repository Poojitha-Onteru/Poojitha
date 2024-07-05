import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Form = ()=> {
    return(
        <>
        <nav>
            <ol>
                <li>
                    <Link to='/'>Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ol>
        </nav>
        <Outlet/>
        </>
    );
}
export default Form;