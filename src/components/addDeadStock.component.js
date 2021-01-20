import React, { Component } from "react";

export default class AddDeadStock extends Component {
    render() {
        return (
            <form>
            <h3>Add Item to Dead Stock</h3>
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
                <label>Reserve Price</label>
                <input type="text" className="form-control" placeholder="Reserve Price" />
            </div>

            <div className="form-group">
                <label>Approving Authority Email</label>
                <input type="text" className="form-control" placeholder="Approving Authority email" />
            </div>
            <div className="form-group">
                <label>Expiry Date</label>
                <input type="date" className="form-control" placeholder="Expiry Date" />
            </div>
            <div className="form-group">
                <label>Auction Notice Date</label>
                <input type="date" className="form-control" placeholder="Auction Notice Date" />
            </div>
            <div className="form-group">
                <label>Advertisement Date</label>
                <input type="date" className="form-control" placeholder="Advertisement Date" />
            </div>

            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
           
      
          </form>
        );
    }
}