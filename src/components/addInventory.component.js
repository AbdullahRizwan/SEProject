import React, { Component } from "react";

export default class AddInventory extends Component {
    render() {
        return (
            <form>
            <h3>Add Item to Inventory</h3>
            <div className="form-group">
                <label>Item ID</label>
                <input type="text" className="form-control" placeholder="Item ID" />
            </div>

            <div className="form-group">
                <label>Item Name</label>
                <input type="text" className="form-control" placeholder="Item Name" />
            </div>

            <div className="form-group">
                <label>Purchase Price</label>
                <input type="text" className="form-control" placeholder="Purchase Price" />
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
                <label>Invoice Number</label>
                <input type="text" className="form-control" placeholder="Invoice Number" />
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
                    <option value="Phones">Durable</option>
                </select>
            </p>

            <div className="form-group">
                <label>Threshold Value</label>
                <input type="text" className="form-control" placeholder="Threshold Value" />
            </div>
            <  div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Permission Required</label>
                    </div>
                </div>
            
            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
          </form>
       
   
        );
    }
}