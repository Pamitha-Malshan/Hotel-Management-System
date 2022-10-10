import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { SortOutlined } from "@material-ui/icons";

function Piechart() {
  const [role, setrole] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);
  const [employee, setemployee] = useState([]);

  // const [ctotal, setctotal] = useState(3);
  // const [wtotal, setwtotal] = useState(4);
  // const [wstotal, setwstotal] = useState(5);

  useEffect(() => {
  
    axios
      .get("http://localhost:8001/getemployee")
      .then((res) => {
        if (res.data.success) {
          setemployee(res.data.existingPosts);
        }
      })
      .catch((err) => {
        alert(err.message);
      });

      const srole = ["Cheff", "Waiter", "Waitress", "Housekeeper"];
     
      const sage = [   ];
    
      
    
    var ctotal =  5;
    var wtotal = 7;
    var wstotal = 6;
    var Htotal = 4;
    
    for (let i = 0; i < employee.length; i++) {
      switch (employee[i].role) {
        case "cheff":
          ctotal = ctotal + 1;
          break;
    
        case "waiter":
          wtotal = wtotal + 1;
          break;
    
        case "waitress":
          wstotal = wstotal + 1;
          break;
    
        default:
          break;
      }
    
   
      // console.log(employee[i].role);
      // srole.push(employee[i].role);
      // sage.push(parseInt(employee[i].age));
    }



    setrole(srole);
    setStudentMarks(sage);

    // setctotal(ctotal);
    // setwtotal(wtotal);
    // setwstotal(wstotal);
    
    sage.push(ctotal);
    sage.push(wtotal);
    sage.push(wstotal);
    sage.push(Htotal);

   
     
  }, []);

  console.log(employee);
    // console.log(ctotal);
    // console.log(wtotal);
    // console.log(wstotal);
 
  // function count (){
  // useEffect(() => {
    //  const srole = ["Cheff", "Waiter", "Waitress"];
    //   const sage = [  ];
    
    // let ctotal = 0;
    // let wtotal = 0;
    // let wstotal = 0;
    
    // for (let i = 0; i < employee.length; i++) {
    //   switch (employee[i].role) {
    //     case "cheff":
    //       ctotal = ctotal + 1;
    //       break;
    
    //     case "waiter":
    //       wtotal = wtotal + 1;
    //       break;
    
    //     case "waitress":
    //       wstotal = wstotal + 1;
    //       break;
    
    //     default:
    //       break;
    //   }
    
    //   // console.log(employee[i].role);
    //   // srole.push(employee[i].role);
    //   // sage.push(parseInt(employee[i].age));
    // }
    // setrole(srole);
    // setStudentMarks(sage);
    
    // sage.push(ctotal);
    // sage.push(wtotal);
    // sage.push(wstotal);
    
    // console.log(ctotal);
    // console.log(wtotal);
  // }, []);
  // }

  //  console.log(studentMarks);

  return (
    <React.Fragment>
      <center>
        <div className="container-fluid mb-3" >
          <h1 style={{margintop:"30px" }}>Welcome to Employee Position Piechart </h1>
          
          <Chart
            type="pie"
            width={550}
            height={550}
            series={studentMarks}
            options={{
              title: { text: "Staff Positions PieChart" },
              noData: { text: "Empty Data" },
              // colors:["#f90000","#f0f"],
              labels: role,
            }}
          ></Chart>
        </div>
      </center>
    </React.Fragment>
  );
}

export default Piechart;
