import { BrowserRouter, Route, withRouter } from "react-router-dom";

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
import Room from "./Component/Lankani/Room";
import ManageRooms from "./Component/Lankani/GetRooms";
import UpdateRoom from "./Component/Lankani/UpdateRoom";
import RoomReservation from "./Component/Lankani/RoomReservation";
import SearchRoom from "./Component/Lankani/SearchRoom";
import Payment from "./Component/Lankani/PaymentAdd";
// import MonthlyIncomReport from "./Component/Lankani/MonthlyReservationIncom";
// import GetIncomeData from "./Component/Lankani/IncomeData";
import PaymentIncome from "./Component/Lankani/PayIncome";

import AddFood from "./Component/Akeel/AddFood";
import ManageFoods from "./Component/Akeel/GetFood";
import Food from "./Component/Akeel/Food";
import UpdateFood from "./Component/Akeel/UpdateFood";
import Report from "./Component/Lankani/Report";

import CustomerSignup from "./Component/Ayeshi/CustomerSignup";
import CustomerSignin from "./Component/Ayeshi/CustomerSignin";
import AllCustomers from "./Component/Ayeshi/AllCustomers";
import HomePage from "./Component/Ayeshi/HomePage";



function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="row">
          <Route path="/Validate" exact component={Validate}></Route>
          <Route path="/Register" exact component={Register}></Route>
          <Route path="/Signin" exact component={Signin}></Route>
          {/*Pamitha */}
          <div className="col-md-2">
            <div className="col order-1">
              <Route
                path="/Employeeattendanceview"
                exact
                component={Sidebar}
              ></Route>
              <Route path="/Employeeregister" exact component={Sidebar}></Route>
              <Route
                path="/Employeeupdate/:id"
                exact
                component={Sidebar}
              ></Route>
              <Route path="/EmployeeView" exact component={Sidebar}></Route>
              <Route
                path="/Employeeattendance"
                exact
                component={Sidebar}
              ></Route>
              <Route
                path="/Employeereport"
                exact
                component={Sidebar}
              ></Route>

              {/*Ayeshi */}
              <Route path="/AllCustomers" exact component={Sidebar}></Route>
            

              {/*Akeel */}
              <Route path="/insertfood" exact component={Sidebar}></Route>
              <Route path="/viewfood" exact component={Sidebar}></Route>
              <Route path="/Food" exact component={Sidebar}></Route>
              <Route path="/food/update/:id" exact component={Sidebar}></Route>
              

              {/*Lankani */}
              <Route path="/insertroom" exact component={Sidebar}></Route>
              <Route path="/room" exact component={Sidebar}></Route>
              <Route path="/viewroom" exact component={Sidebar}></Route>
              <Route path="/room/update/:id" exact component={Sidebar}></Route>
              {/* <Route path="/income" exact component={Sidebar}></Route> */}
              <Route path="/paymentincome" exact component={Sidebar}></Route>
              <Route path="/report" exact component={Sidebar}></Route>
            </div>
          </div>
          <div className="col order-2">
            <div className="row">
              <Route
                path="/Employeeattendanceview"
                exact
                component={Topbar}
              ></Route>
              <Route path="/Employeeregister" exact component={Topbar}></Route>
              <Route
                path="/Employeeupdate/:id"
                exact
                component={Topbar}
              ></Route>
              <Route path="/EmployeeView" exact component={Topbar}></Route>
              <Route
                path="/Employeeattendance"
                exact
                component={Topbar}
              ></Route>
               <Route
                path="/Employeereport"
                exact
                component={Topbar}
              ></Route>

              {/*Ayeshi */}
              <Route path="/CustomerSignup" exact component={Topbar}></Route>
              <Route path="/CustomerSignin" exact component={Topbar}></Route>
              <Route path="/AllCustomers" exact component={Topbar}></Route>
             

              {/*Akeel */}
              <Route path="/insertfood" exact component={Topbar}></Route>
              <Route path="/viewfood" exact component={Topbar}></Route>
              <Route path="/Food" exact component={Topbar}></Route>
              <Route path="/food/update/:id" exact component={Topbar}></Route>

              {/*Lankani */}
              <Route path="/insertroom" exact component={Topbar}></Route>
              <Route path="/room" exact component={Topbar}></Route>
              <Route path="/viewroom" exact component={Topbar}></Route>
              <Route path="/room/update/:id" exact component={Topbar}></Route>
              <Route path="/roomreservation" exact component={withRouter(Topbar)}></Route>
              <Route path="/search" exact component={Topbar}></Route>
              <Route path="/pay/:email" exact component={Topbar}></Route>
              {/* <Route path="/income" exact component={Topbar}></Route> */}
              <Route path="/paymentincome" exact component={Topbar}></Route>
              <Route path="/report" exact component={Topbar}></Route>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="col order-1">
                  <Route
                    path="/Employeeregister"
                    exact
                    component={EmployeeRegister}
                  ></Route>
                  <Route
                    path="/Employeeattendance"
                    exact
                    component={EmployeeAttendance}
                  ></Route>
                  <Route
                    path="/EmployeeView"
                    exact
                    component={EmployeeView}
                  ></Route>
                  <Route
                    path="/Employeeupdate/:id"
                    exact
                    component={EmployeeUpdate}
                  ></Route>
                  <Route
                    path="/Employeeattendanceview"
                    exact
                    component={EmployeeAttendanceView}
                  ></Route>
                  <Route
                    path="/Employeereport"
                    exact
                    component={EmployeeReport}
                  ></Route>

                  {/*Ayeshi */}
                  <Route path="/CustomerSignup" exact component={CustomerSignup}></Route>
                  <Route path="/CustomerSignin" exact component={CustomerSignin}></Route>
                  <Route path="/AllCustomers" exact component={AllCustomers}></Route>
                  <Route path="/HomePage" exact component={HomePage}></Route>
                  

                  {/*Akeel */}
                  <Route path="/insertfood" exact component={AddFood}></Route>
                  <Route path="/viewfood" exact component={ManageFoods}></Route>
                  <Route path="/food" exact component={Food}></Route>
                  <Route path="/food/update/:id" exact component={UpdateFood}></Route>
                  

                  {/*Lankani */}

                  <Route path="/insertroom" exact component={AddRoom}></Route>
                  <Route path="/room" exact component={Room}></Route>
                  <Route path="/viewroom" exact component={ManageRooms}></Route>
                  <Route path="/room/update/:id" exact component={UpdateRoom}></Route>
                  <Route path="/search" exact component={SearchRoom}></Route>
                  <Route path="/roomreservation" exact component={withRouter(RoomReservation)}></Route>
                  <Route path="/pay/:email" exact component={Payment}></Route>
                  {/* <Route path="/income" exact component={GetIncomeData}></Route> */}
                  <Route path="/paymentincome" exact component={PaymentIncome}></Route>
                  <Route path="/report" exact component={Report}></Route>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Route path="/" exact component={LandingPage}></Route>

          {/* Footer */}
          {/* <Footer/> */}
          <Route path="/Employeeregister" exact component={Footer}></Route>
          <Route path="/Employeeattendance" exact component={Footer}></Route>
          <Route path="/EmployeeView" exact component={Footer}></Route>
          <Route path="/Employeeupdate/:id" exact component={Footer}></Route>
          <Route
            path="/Employeeattendanceview"
            exact
            component={Footer}
          ></Route>
          <Route path="/Employeereport" exact component={Footer}></Route>

          <Route path="/insertfood" exact component={Footer}></Route>
          <Route path="/viewfood" exact component={Footer}></Route>
          <Route path="/food" exact component={Footer}></Route>
          <Route path="/food/update/:id" exact component={Footer}></Route>

          <Route path="/insertroom" exact component={Footer}></Route>
          <Route path="/room" exact component={Footer}></Route>
          <Route path="/viewroom" exact component={Footer}></Route>
          <Route path="/room/update/:id" exact component={Footer}></Route>
          <Route path="/search" exact component={Footer}></Route>
          <Route path="/roomreservation" exact component={withRouter(Footer)}></Route>
          <Route path="/pay/:email" exact component={Footer}></Route>
          {/* <Route path="/income" exact component={Footer}></Route> */}
          <Route path="/paymentincome" exact component={Footer}></Route>
          <Route path="/report" exact component={Footer}></Route>

          <Route path="/CustomerSignup" exact component={Footer}></Route>
          <Route path="/CustomerSignin" exact component={Footer}></Route>
          <Route path="/AllCustomers" exact component={Footer}></Route>
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
