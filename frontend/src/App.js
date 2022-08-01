import { BrowserRouter, Route } from "react-router-dom";

import Sidebar from "./Component/AdminSidebar";
import Topbar from "./Component/Topbar";
import EmployeeRegister from "./Component/Pamitha/EmployeeRegister";
import EmployeeAttendance from "./Component/Pamitha/EmployeeAttendance";

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        {/*Pamitha */}
        <div className="col-md-2">
          <div className="col order-1">
            <Sidebar />
          </div>
        </div>
        <div className="col order-2">
          <div className="row">
            <Topbar />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col order-1">
                <Route path="/Employeeregister" exact component={EmployeeRegister}></Route>
                <Route path="/Employeeattendance" exact component={EmployeeAttendance}></Route>

                {/*Ayeshi */}




                {/*Akeel */}






                {/*Lankani */}





              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
