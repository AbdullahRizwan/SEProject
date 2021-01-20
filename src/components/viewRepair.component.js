import React, { Component } from "react";

export default class ViewRepair extends Component {

    render() {
    
        return (
          <p>
                <h3>Repair Register</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Vendor ID</th>
                <th>Vendor Name</th>
                <th>Bill</th>
                <th>Cost</th>
                <th>Repair Approval Date</th>
                <th>Repair Approval Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
                <td>4231</td>
                <td>Bike</td>
                <td>45</td>
                <td>Hassan Ali</td>
                <td>50,000</td>	
                <td>300,000</td>
                <td>5 May 2020</td>
                <td>9:30 AM</td>
				</tr>
                <tr>
				<td>2</td>
                <td>4321</td>
                <td>Bike</td>
                <td>23</td>
                <td>Ali Mirza</td>
                <td>10,000</td>	
                <td>130,000</td>
                <td>6 April 2020</td>
                <td>11:00 AM</td>
				
				</tr>
                <tr>
				<td>3</td>
                <td>2341</td>
                <td>Car</td>
                <td>21</td>
                <td>Bilal Ahmad</td>
                <td>150,000</td>	
                <td>3,300,000</td>
                <td>20 October 2020</td>
                <td>7:30 PM</td>
				</tr>
                <tr>
				<td>4</td>
                <td>2321</td>
                <td>Sniper</td>
                <td>19</td>
                <td>Ismail Awais</td>
                <td>10,000</td>	
                <td>300,000</td>
                <td>7 September 2020</td>
                <td>5:30 PM</td>
				
                </tr>
                <tr>	<td>5</td>
                <td>1231</td>
                <td>Cell Phone</td>
                <td>32</td>
                <td>Abdullah Shah</td>
                <td>5,000</td>	
                <td>50,000</td>
                <td>28 August 2020</td>
                <td>1:00 AM</td>
            </tr>
                           </tbody>
    </table>
                </p>   
                 );
    }
}