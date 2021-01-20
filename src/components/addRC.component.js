import React, { Component } from "react";

export default class AddRC extends Component {
    render() {
        return (
            <form>
            <h3>Add Record to RC Register</h3>
            <div className="form-group">
                <label>RC number</label>
                <input type="text" className="form-control" placeholder="RC number" />
            </div>

            <div className="form-group">
                <label>Request ID</label>
                <input type="text" className="form-control" placeholder="Request ID" />
            </div>

            <div className="form-group">
                <label>Receiver Name</label>
                <input type="text" className="form-control" placeholder="Receiver Name" />
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" placeholder="Date" />
            </div>
            <div className="form-group">
                <label>Time</label>
                <input type="time" className="form-control" placeholder="Time" />
            </div>

            <button type="submit" onClick={this.onSubmit}
                            className="btn btn-primary btn-block"
            >Save</button>
           
      
          </form>
        );
    }
}