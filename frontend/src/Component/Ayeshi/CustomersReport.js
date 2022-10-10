import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
//import { SortOutlined } from "@material-ui/icons";

function NationPiechart() {
  const [nation, setnation] = useState([]);
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
   
    axios
      .get("http://localhost:8001/AllCustomers")
      .then((res) => {
        if (res.data.success) {
          setcustomers(res.data.existingPosts);
        }
      })
      .catch((err) => {
        alert(err.message);
      });

      const nation = ["Srilankan", "Foriegn"];
     
    
    let stotal = 0;
    let ftotal = 0;
  
    
    for (let i = 0; i < customers.length; i++) {
      switch (customers[i].nation) {
        case "Srilankan":
        stotal = stotal + 1;
          break;
    
        case "Foreign":
          ftotal = ftotal + 1;
          break;
    
    
        default:
          break;
      }
    
      
    }
    setnation(nation);
   
    
    console.log(stotal);
    console.log(ftotal);
    
    
    

     
  }, []);

  console.log(customers);

 
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

   console.log(nation);

  return (
    <React.Fragment>
      <center>
        <div className="container-fluid mb-3">
          <h1>Piechart of Customers Nation</h1>

          <Chart
            type="pie"
            width={550}
            height={550}
            series={nation}
            options={{
              noData: { text: "Empty Data" },
              labels: nation,
            }}
          ></Chart>
        </div>
      </center>
    </React.Fragment>
  );
}

export default NationPiechart;
