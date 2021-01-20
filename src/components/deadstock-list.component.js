import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const DeadStocks = props => (
    <tr>
      <td>{props.deadStocks.itemID}</td>
      <td>{props.deadStocks.itemname}</td>
      <td>{props.deadStocks.purchaseprice}</td>
      <td>{props.deadStocks.reserveprice}</td>
      <td>{props.deadStocks.approvingauthority}</td>
      <td>{props.deadStocks.expirydate}</td>
      <td>{props.deadStocks.auctionnoticedate}</td>
     <td>{props.deadStocks.addate}</td>
    </tr>
  )
  
export default class DeadStocksList extends Component {

    constructor(props) {
        super(props);
        this.state = {deadstock: []};
      }
    componentDidMount() {
        axios.get('http://localhost:5000/deadstock/')
         .then(response => {
           this.setState({ deadstock: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }


      deadStockList() {
        return this.state.deadstock.map(currentdeadstock => {
          return <DeadStocks deadStocks={currentdeadstock} key={currentdeadstock._id}/>;
        })
      }
  render() {
    return (
        <div>
        <h3>Dead Stocks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Purchase Price</th>
              <th>Reserve Price</th>
              <th>Approving Authority</th>
              <th>Expiry Date</th>
              <th>Auction Notice Date</th>
              <th>Add Date</th>
            </tr>
          </thead>
          <tbody>
            { this.deadStockList() }
          </tbody>
        </table>
      </div>
    )
  }
}