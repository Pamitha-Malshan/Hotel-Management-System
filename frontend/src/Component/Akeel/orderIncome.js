import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PaymentIncome() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    //----------get all payments
    axios
      .get("http://localhost:8001/getpayFood")
      .then((res) => {
        if (res.data.success) {
          setPayments(res.data.exisistingPayments);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  //   //-------------filter the data of search
  //   function filterData(payment, searchKey) {
  //     // const year = new Date(payment.date).getFullYear();
  //     const result = payment.filter((pay) => pay.date.getFullYear() === +searchKey);
  //     setPayments(result);
  //   }

  //   //--------------function of handling search area
  //   const handleSearchArea = (e) => {
  //     const searchKey = e.currentTarget.value;

  //     axios.get("http://localhost:8001/getpayment").then((res) => {
  //       if (res.data.success) {
  //         filterData(res.data.exisistingPayments, searchKey);
  //       }
  //     });
  //   };

  //-----------function for get total income monthly wise
  function getTotalPriceByMonth(data) {
    if (data.length > 0) {
      var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var monthsAmt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var amountArray = [[], [], [], [], [], [], [], [], [], [], [], []];

      for (var i = 0; i < data.length; i++) {
        var day = new Date(data[i].date);

        var month = monthNames[day.getMonth()];
        switch (month) {
          case "Jan":
            amountArray[0].push(data[i].total);
            break;

          case "Feb":
            amountArray[1].push(data[i].total);

            break;

          case "Mar":
            amountArray[2].push(data[i].total);
            break;

          case "Apr":
            amountArray[3].push(data[i].total);

            break;

          case "May":
            amountArray[4].push(data[i].total);
            break;

          case "Jun":
            amountArray[5].push(data[i].total);
            break;

          case "Jul":
            amountArray[6].push(data[i].total);
            break;

          case "Aug":
            amountArray[7].push(data[i].total);
            break;

          case "Sep":
            amountArray[8].push(data[i].total);

            break;

          case "Oct":
            amountArray[9].push(data[i].total);
            break;

          case "Nov":
            amountArray[10].push(data[i].total);
            break;

          case "Dec":
            amountArray[11].push(data[i].total);
            break;

          default:
            break;
        }
      }

      for (var x = 0; x < amountArray.length; x++) {
        amountArray[x].reduce((pre, curr) => {
          return (monthsAmt[x] = pre + new Number(curr));
        }, 0);
      }
    }

    return monthsAmt;
  }

  //   let amount = getTotalPriceByMonth(payments);

  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octomber",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#8c1aff",
        borderColor: "#8c1aff",
        borderWidth: 2,
        // data: amount,
        data: getTotalPriceByMonth(payments),

        xAxisID: "xAxis",
        yAxisID: "yAxis",
      },
    ],
  };

  //----------total anual income of room reservation
  const sum = payments.reduce(
    (previous, current) => previous + new Number(current.total),
    0
  );

  return (
    <div>
      {/* <div>
        
          <div
            className="input-group"
        //     style={{
        //       backgroundImage: `url(${searchBack})`,
        //       height: "500px",
        //       width: "110%",
        //       backgroundSize: "cover",
        //       backgroundRepeat: "no-repeat",
        //       marginTop: "20px",
        //       marginLeft: "-20%",
        //       paddingTop: "2%",
        //       // paddingBottom:'2%',
        //       // marginBottom:'2%'
        //     }}
          >
            <div
              className="form-outline"
              style={{
                paddingTop: "400px",
                width: "650px",

                marginLeft: "270px",
              }}
            >
              <input
                type="text"
                className="form-control"
                name="searchQuary"
                placeholder="   Enter Year"
                onChange={handleSearchArea}
              />
            </div>
          </div>
        

        </div> */}
      <div style={{ width: "1100px", marginLeft: "40px" }}>
        <h1>Income of Order</h1>
        <Bar
          data={state}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "right",
              },
            },

            scales: {
              xAxis: {
                title: {
                  display: true,
                  text: "Month",
                  align: "end",
                  font: {
                    size: 18,
                  },
                },
              },
              yAxis: {
                title: {
                  display: true,
                  text: "Rs.",

                  font: {
                    size: 18,
                  },
                },
              },
            },
          }}
        />
        <h2>Annual Total Income: Rs.{sum}</h2>
      </div>
    </div>
  );
}
