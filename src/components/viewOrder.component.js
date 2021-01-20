import React, { Component } from "react";

export default class ViewOrder extends Component {

    render() {
    
        return (
          <p>
                <h3>Requested Item</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Vendor Name</th>
                <th>Vendor Email</th>
                <th>Order Date</th>
            </tr>
        </thead>
        <tbody><tr>
        <td>1</td>
                <td>Pen</td>
                <td>30</td>
                <td>Ali Shah</td>
                <td>shahidkhan@yahoo.com</td>
                <td>9 December 2020</td>
                </tr>
				<tr>
				<td>2</td>
                <td>Uniforms</td>
                <td>23</td>
                <td>Farooq Ahmed</td>
                <td>farooq@yahoo.com</td>
                <td>9 April 2020</td>
            
                </tr>
			
                <tr>
            	<td>3</td>
                <td>Uniforms</td>
                <td>43</td>
                <td>Ali hammad</td>
                <td>hammad@gmail.com</td>
                <td>10 October 2020</td>
                </tr>
				<tr>
                <td>4</td>
                <td>Badgets</td>
                <td>10</td>
                <td>Ahmed Raza</td>
                <td>AHMEDRAZA@yahoo.com</td>
                <td>12 May 2020</td>
                </tr><tr>         
				<td>5</td>
                <td>Cell Phone</td>
                <td>4</td>
                <td>Arsalan Mubashir</td>
                <td>_arslan20@gmail.com</td>
                <td>29 Spetember 2020</td>
       </tr>

                           </tbody>
    </table>
                </p>   
                 );
    }
}