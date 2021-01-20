import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const RepairRegisters = props => (
    <tr>
      <td>{props.repairRegisters.itemID}</td>
      <td>{props.repairRegisters.itemname}</td>
      <td>{props.repairRegisters.vendorID}</td>
      <td>{props.repairRegisters.vendorname}</td>
      <td>{props.repairRegisters.billnumber}</td>
      <td>{props.repairRegisters.cost}</td>
      <td>{props.repairRegisters.depreciationvalue}</td>
     <td>{props.repairRegisters.date}</td>
      <td>{props.repairRegisters.approvalordernumber}</td>
    </tr>
  )
  
export default class RepairRegistersList extends Component {

    constructor(props) {
        super(props);
        this.state = {repairregister: []};
      }
    componentDidMount() {
        axios.get('http://localhost:5000/repairregister/')
         .then(response => {
           this.setState({ repairregister: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }


      repairRegisterList() {
        return this.state.repairregister.map(currentrepair => {
          return <RepairRegisters repairRegisters={currentrepair} key={currentrepair._id}/>;
        })
      }
  render() {
    return (
        <div>
        <h3>Repair Registers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Vendor ID</th>
              <th>Vendor Name</th>
              <th>Bill Number</th>
              <th>Cost</th>
              <th>Depreciation VAlue</th>
              <th>Date</th>
              <th>Approval Order NUmber</th>
            </tr>
          </thead>
          <tbody>
            { this.repairRegisterList() }
          </tbody>
        </table>
      </div>
    )
  }
}