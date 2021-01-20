import React, { Component } from "react";

export default class RequestItem extends Component {
    render() {
        return (
            <form>
            <h3>Item request by an Employee</h3>
            <div className="form-group">
                <label>Item ID</label>
                <input type="text" className="form-control" placeholder="Item ID" />
            </div>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text" className="form-control" placeholder="Item Name" />
            </div>
            <div className="form-group">
                <label>Employee ID</label>
                <input type="text" className="form-control" placeholder="Employee ID" />
            </div>
            <div className="form-group">
                <label>Employee Name</label>
                <input type="text" className="form-control" placeholder="Employee Name" />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="text" className="form-control" placeholder="Quantity" />
            </div>
            <div className="form-group">
                <label>Branch Name</label>
                <input type="text" className="form-control" placeholder="Branch Name" />
            </div>

            <div className="form-group">
                <label>Issue Date</label>
                <input type="text" className="form-control" placeholder="Issue Date" />
            </div>
            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Durable Item</label>
                    </div>
            </div>
            <div className="form-group">
                <label>Return Date</label>
                <input type="text" className="form-control" placeholder="Return Date" />
            </div>
            <div className="form-group">
                <label>Approving Authority Email</label>
                <input type="text" className="form-control" placeholder="Approving Authority email" />
            </div>
            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
          </form>
       
        );
    }
}