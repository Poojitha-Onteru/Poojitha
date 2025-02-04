import React from "react";
//import { Component } from "react";  
//import Handlesubmit from './third';
import './boot.css'
class Registration extends React.Component{
    render(){
        return(
            <div>
                <form>
                <h1>REGISTRATION FORM</h1>
                    <fieldset>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">First Name:</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <br/>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Last Name:</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <br/>
                    <div class="mb-3">
                        <span for="exampleFormControlInput1" class="form-label" >Email address</span>
                        <input type="email" class="form-control" id="email" placeholder="name@gmail.com"/>
                    </div>
                    <br/>
                    <span for="inputPassword5" class="form-label">Password</span>
                    <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock"/>
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    <br/>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Mother Name:</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <br/>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Father Name:</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <br/>
                    <span class="branch">Branch:</span>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>select your branch</option>
                        <option value="1">CSE</option>
                        <option value="2">ECE</option>
                        <option value="3">EEE</option>
                        <option value="3">AIDS</option>
                        <option value="3">AIML</option>
                        <option value="3">MECH</option>
                    </select>
                    <br/>
                    <br/>
                    <div class="form-check">
                    <span>Gender:</span>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">Male</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Female
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Other
                        </label>
                    </div>
                        <br/>
                        <span>Date of Birth:</span>
                        <input type="date" name="name" id="id"/>
                        <br/>
                        <br/>
                        <div class="col-12">
                            <span for="inputAddress" class="form-label">Address</span>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <br/>
                        <div class="col-12">
                            <span for="inputAddress2" class="form-label">Address 2</span>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <br/>
                        <div class="col-md-6">
                            <span for="inputCity" class="form-label">City</span>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <br/>
                        <div class="col-md-4">
                            <span for="inputState" class="form-label">State</span>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            <span for="inputZip" class="form-label">Zip</span>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                        <br/>
                        <span>Upload resume:</span>
                        <input type="file"/>
                        <br/><br/>
                        <div>   
                        <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Registration;