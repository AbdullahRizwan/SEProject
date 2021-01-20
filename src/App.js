import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import BootstrapNavbar from "./components/bootstrap.component";
import Forgot from './components/forgotpassword.component';
import ViewInventory from './components/viewInventory.component';
import ViewAll from './components/viewall.component';
import AddInventory from './components/addInventory.component';
import AddOrder from './components/addOrder.component';
import AddDeadStock from './components/addDeadStock.component';
import AddRepair from './components/addRepair.component';
import AddRC from './components/addRC.component';
import IssueItem from './components/issueItem.component';
import RequestItem from'./components/requestItem.component';
import ViewRequest from'./components/viewRequest.component';
import ViewOrder from'./components/viewOrder.component';
import ViewRC from "./components/viewRC.component";
import ApproveRequest from"./components/approval.component";
import RepairRegistersList from "./components/repairregister-list.component";
import CreateRepairRegister from "./components/create-repairregister.component";
import CreateDeadStockRegister from "./components/create-deadlockregiter.component";
import DeadStocksList from './components/deadstock-list.component';
import Inventory from "./components/inventory.component";
function App() {
  return (

    
    <Router>
      <div className="container">
    <BootstrapNavbar />
    
      <br/>
      <Route path="/" exact component={RepairRegistersList} />
      <Route path="/create-repair-register" component={CreateRepairRegister} />
      <Route path="/create-dead-stock" component={CreateDeadStockRegister} />
      <Route path="/deadstocks" component={DeadStocksList} />
      <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgotPassword" component={Forgot} />
            <Route path="/viewAll" component={ViewAll} />
            <Route path="/add_inventory" component={AddInventory} />
            <Route path="/add_order" component={AddOrder} />
            <Route path="/add_deadstock" component={AddDeadStock} />
            <Route path="/add_repairRegister" component={AddRepair} />
            <Route path="/add_RC" component={AddRC} />
            <Route path="/issue_item" component={IssueItem} />
            <Route path="/request_item" component={RequestItem} />
            <Route path="/view_request" component={ViewRequest} />
            <Route path="/view_order" component={ViewOrder } />
            <Route path="/view_RC" component={ViewRC} />
            <Route path="/approve_req" component={ApproveRequest} />
            <Route path="/view_inv" component={Inventory} />

   
      </div>
    </Router>
  );
}

export default App;
