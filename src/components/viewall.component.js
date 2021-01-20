import React, { Component } from "react";
import Inventory from './inventory.component';
import { NavigationBar } from "./navigationbar.component";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
export default class ViewAll extends Component {
     
                getInitialState () {
                  return {
                    navExpanded: false
                  }
                }
              
                setNavExpanded(expanded) {
                  this.setState({ navExpanded: expanded });
                }
              
                closeNav() {
                  this.setState({ navExpanded: false });
                }
              
                render() {
                  return (
                    <div>
                      <Navbar onToggle={this.setNavExpanded}
                              expanded={this.state.navExpanded}>
                        <Navbar.Header>
                          <Navbar.Brand>
                          <Nav.Link href="/home-page">Add Item</Nav.Link>
                                  
                          </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                          <Nav onSelect={this.closeNav}>
                            { this.renderMenuItem() }
                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>
                      <br />
                            <Switch>
                                <Route exact path="/">
                                    <Inventory />
                                </Route>
                                <Route path="/home-page">
                                    <Inventory />
                                </Route>
                                <Route path="/home-page">
                                    <Inventory />
                                </Route>
                            </Switch>
                    </div>
                    
                  )
                }
            }
        