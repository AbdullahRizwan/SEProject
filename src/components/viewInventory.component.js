import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

/* style is not required */
export default class ViewInventory extends Component {
render() {
    return (
        <table class="table">
        <thead>
            <tr>
                <th>Row</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                
                <th>Row</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Clark</td>
                <td>Kent</td>
                <td>clarkkent@mail.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>John</td>
                <td>Carter</td>
                <td>johncarter@mail.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Peter</td>
                <td>Parker</td>
                <td>peterparker@mail.com</td>
            </tr>     
            <tr>
                <td>2</td>
                <td>John</td>
                <td>Carter</td>
                <td>johncarter@mail.com</td>
            </tr>
        </tbody>
    </table>
);
}
}