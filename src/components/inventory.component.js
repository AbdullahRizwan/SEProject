import React, { Component } from "react";

export default class Inventory extends Component {


    render() {
    
        return (
          <p>
                <h3>Inventory</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Threshold Value</th>
                <th>Price</th>
                <th>Type</th>
                <th>Fine(per day)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1001</td>
                <td>Badge</td>
                <td>30</td>
                <td>5</td>
                <td>0</td>
                <td>Consumable</td>
                <td>0</td>
            </tr>

            <tr>
                <td>2</td>
                <td>4001</td>
                <td>pen</td>
                <td>100</td>
                <td>20</td>
                <td>0</td>
                <td>Stationary</td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1981</td>
                <td>Car</td>
                <td>5</td>
                <td>2</td>
                <td>0</td>
                <td>Durable</td>
                <td>99</td>
            </tr>
            <tr>
                <td>4</td>
                <td>1001</td>
                <td>Badge</td>
                <td>30</td>
                <td>5</td>
                <td>0</td>
                <td>Consumable</td>
                <td>0</td>
            </tr>
            <tr>
                <td>5</td>
                <td>5001</td>
                <td>Badge</td>
                <td>30</td>
                <td>5</td>
                <td>0</td>
                <td>Consumable</td>
                <td>0</td>
            </tr>
            <tr>
                <td>6</td>
                <td>4001</td>
                <td>Badge</td>
                <td>30</td>
                <td>5</td>
                <td>0</td>
                <td>Consumable</td>
                <td>0</td>
            </tr>
                           </tbody>
    </table>
                </p>   
                 );
    }
}