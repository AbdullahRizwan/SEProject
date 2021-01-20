import React, { Component } from "react";

export default class ViewDead extends Component {

    render() {
    
        return (
          <p>
                <h3>Dead Stock</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Purchase Price</th>
                <th>Reserve Price</th>
                <th>Expiry Date</th>
                <th>Auction Notice Date</th>
                <th>Advertisement Date</th>
                <th>Approving Authority Email</th>
            </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
                <td>3493</td>
                <td>Cell Phone</td>
                <td>30,224</td>
                <td>20,000</td>
                <td>9 December 2020</td>	
                <td>10 December 2020</td>
                <td>5 December 2020</td>
                <td>abdullahRizwan@gmail.com</td>
				</tr><tr>
				<td>2</td>
                <td>3433</td>
                <td>Bike</td>
                <td>130,000</td>
                <td>70,000</td>
                <td>6 January 2020</td>	
                <td>10 January 2020</td>
                <td>1 January 2020</td>
                <td>Rizwan@gmail.com</td>
				</tr><tr>
				<td>3</td>
                <td>2001</td>
                <td>Bike</td>
                <td>150,000</td>
                <td>60,000</td>
                <td>7 January 2020</td>	
                <td>24 January 2020</td>
                <td>16 January 2020</td>
                <td>MominQureshi@gmail.com</td>
				</tr><tr>
				<td>4</td>
                <td>2431</td>
                <td>Car</td>
                <td>2,350,000</td>
                <td>960,000</td>
                <td>23 April 2020</td>	
                <td>27 April 2020</td>
                <td>16 April 2020</td>
                <td>AliHamza@gmail.com</td>
                </tr>
                <tr>
                <td>5</td>
                <td>4231</td>
                <td>Bike</td>
                <td>300,000</td>
                <td>120,000</td>
                <td>9 May 2020</td>	
                <td>10 May 2020</td>
                <td>5 May 2020</td>
                <td>hassan@gmail.com</td>
                </tr>
                           </tbody>
    </table>
                </p>   
                 );
    }
}