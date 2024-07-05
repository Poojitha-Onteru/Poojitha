import React from 'react';
import './boot.css';
 function Login(){
    return(
        <form>
        <h1>LOGIN</h1>
        <fieldset>
            <div data-mdb-input-init class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example3c">Your Email</label>
                <input type="email" id="form3Example3c" class="form-control" />
            </div>
            <br/>
            <div data-mdb-input-init class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example3c">Your password</label>
                <input type="email" id="form3Example3c" class="form-control" />
            </div>
            <br/>
            <button type="button">LOGIN</button>
        </fieldset>
    </form>
    );
 }
 export default Login;