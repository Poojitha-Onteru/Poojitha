import React from 'react';
 function Signup(){
    return(
        <form>
        <h1>SIGN UP</h1>
        <fieldset>
            <div data-mdb-input-init class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example1c">Your Name</label>
                <input type="text" id="form3Example1c" class="form-control" />
            </div>
            <br/>
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
            <button type="button">Sign Up</button>
        </fieldset>
    </form>
    );
 }
 export default Signup;