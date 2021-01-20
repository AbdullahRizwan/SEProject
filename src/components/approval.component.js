import React, { Component } from "react";

export default class ApproveRequest extends Component {

    render() {
    
        return (
          <p>
                <h3>Approve Requested Item</h3>
                <table class="table">
        <thead>
            <tr>
                <th>Sr.</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Branch Name</th>
                <th>Quantity</th>
                <th>Issue Date</th>
                <th>Return Date</th>
              
            </tr>
        </thead>
        <tbody>   <tr>
        <td>1</td>
                <td>1001</td>
                <td>Cell Phone</td>
                <td>9000</td>
                <td>Ali Shah</td>
                <td>M1</td>
                <td>5</td>
                <td>9 December 2020</td>
                <td>20 December 2020</td>
                <td><button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Approve</button></td><td>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Disapprove</button>
                </td>
                </tr>   <tr>
				<td>2</td>
                <td>1345</td>
                <td>Car</td>
                <td>9000</td>
                <td>Ali Shah</td>
                <td>M1</td>
                <td>1</td>
                <td>9 January 2020</td>
                <td>20 February 2020</td>
                <td><button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Approve</button></td><td>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Disapprove</button>
                </td>
                </tr>   <tr>
				<td>3</td>
                <td>3436</td>
                <td>Motorcycle</td>
                <td>3000</td>
                <td>Umer Nawaz</td>
                <td>M3</td>
                <td>1</td>
                <td>5 March 2018</td>
                <td>10 March 2018</td>
                <td><button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Approve</button></td><td>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Disapprove</button>
                </td>
                </tr>   <tr>
				<td>4</td>
                <td>5812</td>
                <td>Cell Phone</td>
                <td>32</td>
                <td>Usman Wassem</td>
                <td>M3</td>
                <td>1</td>
                <td>5 June 2017</td>
                <td>25 June 2017</td><td><button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Approve</button></td><td>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Disapprove</button>
                </td>
                </tr>   <tr>
				<td>5</td>
                <td>4368</td>
                <td>Car</td>
                <td>764</td>
                <td>Ali Arsalan</td>
                <td>M1</td>
                <td>1</td>
                <td>7 July 2020</td>
                <td>17 July 2020</td><td><button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Approve</button></td><td>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Disapprove</button>
                </td>
                  </tr>
                           </tbody>
    </table>
                </p>   
                 );
    }
}