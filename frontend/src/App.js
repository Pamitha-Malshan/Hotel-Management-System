import { BrowserRouter, Route } from "react-router-dom";

import Sidebar from "./Component/AdminSidebar";
import Topbar from "./Component/Topbar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import EmployeeRegister from "./Component/Pamitha/EmployeeRegister";
import EmployeeAttendance from "./Component/Pamitha/EmployeeAttendance";
import EmployeeView from "./Component/Pamitha/EmployeeView";
import EmployeeUpdate from "./Component/Pamitha/EmployeeUpdate";
import EmployeeAttendanceView from "./Component/Pamitha/EmployeeAttendanceView";
import EmployeeReport from "./Component/Pamitha/EmployeeReport";
import Register from "./Component/Register";
import Signin from "./Component/Signin";
import Validate from "./Component/validation";


import AddRoom from "./Component/Lankani/AddRoom";


function App() {
  return (
    <BrowserRouter>
      <div>
      <div className="row">
      <Route path="/Validate"  exact component={Validate}></Route>
      <Route path="/Register"  exact component={Register}></Route>
      <Route path="/Signin"  exact component={Signin}></Route>
        {/*Pamitha */}
        <div className="col-md-2">
          <div className="col order-1">
          <Route path="/Employeeattendanceview"  exact component={Sidebar}></Route>
          <Route path="/Employeeregister" exact component={Sidebar}></Route>
          <Route path="/Employeeupdate/:id"  exact component={Sidebar}></Route>
          <Route path="/EmployeeView" exact component={Sidebar}></Route>
          <Route path="/Employeeattendance" exact component={Sidebar}></Route>
          </div>
        </div>
        <div className="col order-2">
          <div className="row">
          <Route path="/Employeeattendanceview"  exact component={Topbar}></Route>
          <Route path="/Employeeregister" exact component={Topbar}></Route>
          <Route path="/Employeeupdate/:id"  exact component={Topbar}></Route>
          <Route path="/EmployeeView" exact component={Topbar}></Route>
          <Route path="/Employeeattendance" exact component={Topbar}></Route>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col order-1">
                <Route path="/Employeeregister" exact component={EmployeeRegister}></Route>
                <Route path="/Employeeattendance" exact component={EmployeeAttendance}></Route>
                <Route path="/EmployeeView" exact component={EmployeeView}></Route>
                <Route path="/Employeeupdate/:id"  exact component={EmployeeUpdate}></Route>
                <Route path="/Employeeattendanceview"  exact component={EmployeeAttendanceView}></Route>
                <Route path="/Employeereport"  exact component={EmployeeReport}></Route>
                </div>
            
            </div>
            
          </div>
         
        </div>
      
      

                {/*Ayeshi */}




                {/*Akeel */}






                {/*Lankani */}
                <div className="row">
                <div className="col-md-2">
                  <div className="col order-1">
                  <Route path="/insertroom"  exact component={Sidebar}></Route>
                  </div>
                </div>
              <div className="col order-2">
                <div className="row">
                  <Route path="/insertroom"  exact component={Topbar}></Route>             
                </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col order-1">
                    <Route path="/insertroom" exact component={AddRoom}></Route>
                    </div>                
                </div>               
              </div>
           
            </div>
            </div>
                




                
      </div>  
      <div className="row">
      <Route path="/hotelgreen"  exact component={LandingPage}></Route>

      {/* Footer */}
               {/* <Footer/> */}
               <Route path="/Employeeregister" exact component={Footer}></Route>
                <Route path="/Employeeattendance" exact component={Footer}></Route>
                <Route path="/EmployeeView" exact component={Footer}></Route>
                <Route path="/Employeeupdate/:id"  exact component={Footer}></Route>
                <Route path="/Employeeattendanceview"  exact component={Footer}></Route>
                <Route path="/Employeereport"  exact component={Footer}></Route>
                
                <Route path="/insertroom"  exact component={Footer}></Route>

      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
