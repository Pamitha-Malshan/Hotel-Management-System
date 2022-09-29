import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/sidebar.css'
import logo from '../image/logo.png'

function Sidebar() {
  const loc=  useLocation()
  console.log(loc);
  const pathname=loc.pathname
    return (
      <div >
        <aside>
           {/* <div class="top">
              <div class="logo">
             <img src={logo}/>
             <h2>EGA<span class="danger">TOR</span></h2>
           </div>
           <div class="close" id="close-btn">
               <span class="material-icons-sharp">
                   close
                </span>
           </div>
        </div> */}
           <div class="sidebar">
            <a href="#" >
                <span class="material-icons-sharp">grid_view</span>
                <h3>Dashboard</h3>
            </a>
            <a href="/Employeeattendanceview" className='link' class={pathname==="/Employeeattendanceview" ? "active":""} >
                <span class="material-icons-sharp">group</span>
                <h3>Employee</h3>
            </a>
            <a href="/Employeeregister" className='link' class={pathname==="/Employeeregister" ? "active":""}>
                <span class="material-icons-sharp">person_outline</span>
                <h3>Customers</h3>
            </a>
            <a href="/room" className='link' class={pathname==="/room" ? "active":""}>
                <span class="material-icons-sharp">bed</span>
                <h3>Rooms</h3>
            </a>
            <a href="/food" className='link' class={pathname==="/food" ? "active":""} >
                <span class="material-icons-sharp">receipt_long</span>
                <h3>Orders</h3>
            </a>
            <a href="#">
                <span class="material-icons-sharp">insights</span>
                <h3>Analytics</h3>
            </a>
            <a href="#">
                <span class="material-icons-sharp">mail_outline</span>
                <h3>Messages</h3>
                <span class="message-count">26</span>
            </a>
            <a href="#">
                <span class="material-icons-sharp">inventory</span>
                <h3>Products</h3>
            </a>
            <a href="/EmployeeReport">
                <span class="material-icons-sharp">report_gmailerrorred</span>
                <h3>Reports</h3>
            </a>
            <a href="#">
                <span class="material-icons-sharp">settings</span>
                <h3>Settings</h3>
            </a>
            <a href="#">
                <span class="material-icons-sharp">add</span>
                <h3>Add Product</h3>
            </a>
            <a href="/hotelgreen">
                <span class="material-icons-sharp">logout</span>
                <h3>Logout</h3>
            </a>
            </div>
        </aside>
      </div>
    );
  }
  
  export default Sidebar;