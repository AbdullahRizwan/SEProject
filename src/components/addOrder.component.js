import React, { Component } from "react";

export default class AddOrder extends Component {
    render() {
    return(

        <form>
        <h3>Order Item</h3>
        <div className="form-group">
            <label>Item Name</label>
            <input type="text" className="form-control" placeholder="Item Name" />
        </div>
        <div className="form-group">
            <label>Quantity</label>
            <input type="text" className="form-control" placeholder="Quantity" />
        </div>
        <div className="form-group">
            <label>Vendor Name</label>
            <input type="text" className="form-control" placeholder="Vendor Name" />
        </div>
        <div className="form-group">
            <label>Vendor Email</label>
            <input type="text" className="form-control" placeholder="Vendor Email" />
        </div>
        <div className="form-group">
            <label>Order Date</label>
            <input type="text" className="form-control" placeholder="Order Date" />
        </div>
        <button type="submit" onClick={this.onSubmit}
                        className="btn btn-primary btn-block"
        >Save</button>
      </form>
   
    );
    }
}