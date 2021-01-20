import React, { Component } from "react";

export default class AddRepair extends Component {
    render() {
        return (
            <form>
            <h3>Add Item to Repair Register</h3>
            <div className="form-group">
                <label>Item ID</label>
                <input type="text" className="form-control" placeholder="Item ID" />
            </div>

            <div className="form-group">
                <label>Item Name</label>
                <input type="text" className="form-control" placeholder="Item Name" />
            </div>

            <div className="form-group">
                <label>Vendor ID</label>
                <input type="text" className="form-control" placeholder="Vendor ID" />
            </div>

            <div className="form-group">
                <label>Vendor Name</label>
                <input type="text" className="form-control" placeholder="Vendor Name" />
            </div>

            <div className="form-group">
                <label>Bill</label>
                <input type="text" className="form-control" placeholder="Bill" />
            </div>
            <div className="form-group">
                <label>Cost</label>
                <input type="text" className="form-control" placeholder="cost" />
            </div>
            <div className="form-group">
                <label>Repair Approval Date</label>
                <input type="date" className="form-control" placeholder="Repair Approval Date" />
            </div>
            <div className="form-group">
                <label>Repair Approval Time</label>
                <input type="time" className="form-control" placeholder="Repair Approval Time" />
            </div>

            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
           
      
          </form>
        );
    }
}