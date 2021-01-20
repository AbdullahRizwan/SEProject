import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateRepairRegister extends Component {
    constructor(props)
    {
        super(props);

        this.onChangeitemID = this.onChangeitemID.bind(this);
        this.onChangeitemname = this.onChangeitemname.bind(this);
        this.onChangevendorID = this.onChangevendorID.bind(this);
        this.onChangevendorname = this.onChangevendorname.bind(this);
        this.onChangebillnumber = this.onChangebillnumber.bind(this);
        this.onChangecost = this.onChangecost.bind(this);
        this.onChangedepreciationvalue = this.onChangedepreciationvalue.bind(this);
        this.onChangeapprovalordernumber = this.onChangeapprovalordernumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemID: '',
            itemname: '',
            vendorID: '',
            vendorname: '',
            billnumber: 0,
            cost:0,
            depreciationvalue: 0,
            date: new Date(),
            approvalordernumber: 0
          }
    }

    onChangeitemID(e) {
        this.setState({
          itemID: e.target.value
        });
      }
      onChangeitemname(e) {
        this.setState({
          itemname: e.target.value
        });
      }
      onChangevendorID(e) {
        this.setState({
          vendorID: e.target.value
        });
      }
      onChangevendorname(e) {
        this.setState({
          vendorname: e.target.value
        });
      }
      onChangebillnumber(e) {
        this.setState({
          billnumber: e.target.value
        });
      }
      onChangecost(e) {
        this.setState({
          cost: e.target.value
        });
      }
      onChangedepreciationvalue(e) {
        this.setState({
            depreciationvalue: e.target.value
        });
      }
      onChangeapprovalordernumber(e) {
        this.setState({
            approvalordernumber: e.target.value
        });
      }
      onChangeDate(date) {
        this.setState({
          date: date
        });
      }

      onSubmit(e) {
        e.preventDefault();
        if(this.state.cost>(this.state.depreciationvalue/2)){
          window.alert("As Cost>1/2*depreciation value so it is a dead stock")
          window.location = '/create-dead-stock'
        }
        else{
        const repairregister = {
            itemID: this.state.itemID,
            itemname: this.state.itemname,
            vendorID: this.state.vendorID,
            vendorname: this.state.vendorname,
            billnumber: this.state.billnumber,
            cost: this.state.cost,
            depreciationvalue: this.state.depreciationvalue,
            date: this.state.date,
            approvalordernumber: this.state.approvalordernumber
        };
      console.log(repairregister);
      axios.post('http://localhost:5000/repairregister/add', repairregister)
        .then(res => console.log(res.data));
            // window.location = '/';
            window.alert("Item added to Repair register Sucessfully.")
            window.location = '/'
    }
  }

  render() {
    return (
      <div>
        <h3>Create New Repair Register Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Item ID: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.itemID}
                onChange={this.onChangeitemID}
                />
          </div>
          <div className="form-group">
            <label>Item Name: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.itemname}
                onChange={this.onChangeitemname}
                />
          </div>
          <div className="form-group">
            <label>Vendor ID: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.vendorID}
                onChange={this.onChangevendorID}
                />
          </div>
          <div className="form-group">
            <label>Vendor Name: </label>
            <input 
                type="text0" 
                className="form-control"
                value={this.state.vendorname}
                onChange={this.onChangevendorname}
                />
          </div>
          <div className="form-group">
            <label>Bill Number: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.billnumber}
                onChange={this.onChangebillnumber}
                />
          </div>
          <div className="form-group">
            <label>Cost: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.cost}
                onChange={this.onChangecost}
                />
          </div>
          <div className="form-group">
            <label>Depreciation Value: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.depreciationvalue}
                onChange={this.onChangedepreciationvalue}
                />
          </div>
          <div className="form-group">
            <label>Approval Order Number: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.approvalordernumber}
                onChange={this.onChangeapprovalordernumber}
                />
          </div>
          <div className="form-group">
            <label>Repair Approval Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Repair Register Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}