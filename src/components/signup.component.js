import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import Login from "./login.component";
import ViewInventory from "./viewInventory.component";

export default class SignUp extends Component {

    onSubmit = () => {
        return  <Redirect  to="./login.component" />
     };
    render() {
     
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" onClick={this.onSubmit}
                                className="btn btn-primary btn-block"
                >Sign Up</button>
               
                <p className="forgot-password text-right">
                    Already registered <a href="./sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}