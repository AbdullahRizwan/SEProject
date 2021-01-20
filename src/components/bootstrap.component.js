import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>     
                <div className="row">
                    <div className="col-md-12">
                       
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">NHMP Inventory</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/issue_item">Issue Item</Nav.Link>
                                    <NavDropdown title="Request" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/request_item">Employee's Request</NavDropdown.Item>
                                        <NavDropdown.Item href="/view_request">View Requests</NavDropdown.Item>
                                        <NavDropdown.Item href="/approve_req">Approve Requests</NavDropdown.Item> 
                                      </NavDropdown>
                                    <NavDropdown title="Order" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/add_order">Order Item</NavDropdown.Item>
                                        <NavDropdown.Item href="/view_order">View Ordered Items</NavDropdown.Item>
                                      </NavDropdown>
                                    <NavDropdown title="View Record" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/view_inv">Inventory</NavDropdown.Item>
                                        <NavDropdown.Item href="/deadstocks">Dead Stock</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Repair Register</NavDropdown.Item>
                                        <NavDropdown.Item href="/view_RC">RC Register</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Add Record" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/add_inventory">Inventory</NavDropdown.Item>
                                        <NavDropdown.Item href="/create-dead-stock">Dead Stock</NavDropdown.Item>
                                        <NavDropdown.Item href="/create-repair-register">Repair Register</NavDropdown.Item>
                                        <NavDropdown.Item href="/add_RC">RC Register</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                   </Navbar.Collapse>
                            </Navbar>
                            <br />
                                         </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;