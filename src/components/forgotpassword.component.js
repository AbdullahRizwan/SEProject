import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

export default class Forgot extends Component {
    onSubmit = () => {
        
            
        return <Redirect to='/signup.component' />
     }
   
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick="onSubmit()">Change Password</button>
                
               
            </form>
        );
    }
}