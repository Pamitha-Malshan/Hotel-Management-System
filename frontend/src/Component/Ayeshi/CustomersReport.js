import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

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
            series={[4,2]}
            options={{
              noData: { text: "Empty Data" },
              labels: ["Srilankan", "Foriegn"],
            }}
          ></Chart>
        </div>
      </center>
    </React.Fragment>
  );
}

export default NationPiechart;
