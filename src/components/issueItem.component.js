import React, { Component } from "react";

export default class IssueItem extends Component {
    render() {
        return (
            <form>
            <h3>Issue Item to an Employee</h3>
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
                <input type="date" className="form-control" placeholder="Issue Date" />
            </div>
            <p>
                <label>Product type</label> 
                <select 
                    required 
                    name="type"
                    >
                    <option>Select One</option>
                    <option value="Phones">Stationary</option>
                    <option value="Phones">Consumable</option>
                </select>
            </p>          

            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
          </form>
       
        );
    }
}