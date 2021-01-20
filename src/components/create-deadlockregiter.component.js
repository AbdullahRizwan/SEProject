import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateDeadStockRegister extends Component 
{
    constructor(props)
    {
        super(props);

        this.onChangeitemID = this.onChangeitemID.bind(this);
        this.onChangeitemname = this.onChangeitemname.bind(this);
        this.onChangepurchaseprice = this.onChangepurchaseprice.bind(this);
        this.onChangereserveprice = this.onChangereserveprice.bind(this);
        this.onChangeapprovingauthority = this.onChangeapprovingauthority.bind(this);
        this.onChangeexpirydate = this.onChangeexpirydate.bind(this);
        this.onChangeauctionnoticedate = this.onChangeauctionnoticedate.bind(this);
        this.onChangeaddate = this.onChangeaddate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemID: '',
            itemname: '',
            purchaseprice: 0,
            reserveprice: 0,
            approvingauthority: '',
            expirydate: new Date(),
            auctionnoticedate: new Date(),
            addate: new Date()
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
      onChangepurchaseprice(e) {
        this.setState({
            purchaseprice: e.target.value
        });
      }
      onChangereserveprice(e) {
        this.setState({
            reserveprice: e.target.value
        });
      }
      onChangeapprovingauthority(e) {
        this.setState({
            approvingauthority: e.target.value
        });
      }
      onChangeexpirydate(expirydate) {
        this.setState({
          expirydate: expirydate
        });
      }
      onChangeauctionnoticedate(auctionnoticedate) {
        this.setState({
            auctionnoticedate: auctionnoticedate
        });
      }
      onChangeaddate(addate) {
        this.setState({
          addate: addate
        });
      }
      onSubmit(e) {
        e.preventDefault();
        const deadstock = {
            itemID: this.state.itemID,
            itemname: this.state.itemname,
            purchaseprice: this.state.purchaseprice,
            reserveprice: this.state.reserveprice,
            approvingauthority: this.state.approvingauthority,
            expirydate: this.state.expirydate,
            auctionnoticedate: this.state.auctionnoticedate,
            addate: this.state.addate,
        };
      axios.post('http://localhost:5000/deadstock/add', deadstock)
        .then(res => console.log(res.data));
            // window.location = '/';
            window.alert("Item added to Dead stock register Sucessfully.")
            window.location = '/'
    }

  render() {
    return (
      <div>
        <h3>Create Dead Stock Log</h3>
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
            <label>Purchase Price: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.purchaseprice}
                onChange={this.onChangepurchaseprice}
                />
          </div>
          <div className="form-group">
            <label>Reserve Price: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.reserveprice}
                onChange={this.onChangereserveprice}
                />
          </div>
          <div className="form-group">
            <label>Approving Authority: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.approvingauthority}
                onChange={this.onChangeapprovingauthority}
                />
          </div>
          <div className="form-group">
            <label>Expiry Date: </label>
            <div>
              <DatePicker
                selected={this.state.expirydate}
                onChange={this.onChangeexpirydate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Auction Notice Date: </label>
            <div>
              <DatePicker
                selected={this.state.auctionnoticedate}
                onChange={this.onChangeauctionnoticedate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Add Date: </label>
            <div>
              <DatePicker
                selected={this.state.addate}
                onChange={this.onChangeeaddate}
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Dead Stock Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}