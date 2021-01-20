import React, { Component } from "react";

export default class ViewRC extends Component {

    render() {
    
        return (
          <p>
                <h3>RC Register</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>RC number</th>
                <th>Request ID</th>
                <th>Receiver Name</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>

            <tr>
            <td>1</td>
                <td>432</td>
                <td>32</td>
                <td>Hassan Ali</td>
                <td>5 May 2020</td>
                <td>9:30 AM</td>
				
                </tr>
				<tr>
				<td>2</td>
                <td>32</td>
                <td>132</td>
                <td>Irshad Haseeb</td>
                <td>9 March 2020</td>
                <td>10:30 AM</td>
				
				
                </tr>
				<tr>
				<td>3</td>
                <td>1232</td>
                <td>45</td>
                <td>Uneeb Arshad</td>
                <td>12 November 2020</td>
                <td>3:00 PM</td>
				
                </tr>
				<tr>
				<td>4</td>
                <td>132</td>
                <td>45</td>
                <td>Muhammad Ali</td>
                <td>13 May 2020</td>
                <td>8:30 AM</td>
				
                </tr>
				<tr>
                <td>5</td>
                <td>321</td>
                <td>3</td>
                <td>Taimoor Waqas</td>
                <td>10 September 2020</td>
                <td>4:00 PM</td>
            </tr>

                           </tbody>
    </table>
                </p>   
                 );
    }
}