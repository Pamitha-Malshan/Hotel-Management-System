const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const EmployeeRegisterRoutes = require('./Routes/EmployeeRegister');
const EmployeeAttendanceRoutes = require('./Routes/EmployeeAttendance');
const Register = require('./Routes/Register');
const RoomRouter = require('./Routes/RoomRoute');
const RoomBooking = require('./Routes/RoomBookingRoutes');
const PaymentRouter = require('./Routes/PaymentRoute');
const EmailRouter = require('./Routes/EmailRoute');
const FoodRouter= require("./Routes/foodRoute")
const OrderFood = require('./Routes/OrderFoodRoute');

const app = express();



//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(multer());

app.use(EmployeeRegisterRoutes);
app.use(EmployeeAttendanceRoutes);
app.use(Register);
app.use(RoomRouter);
app.use(RoomBooking);
app.use(PaymentRouter);
app.use(EmailRouter);

app.use(FoodRouter);
app.use(OrderFood);


const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/HOTELSYSTEM?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(process.env.PORT || PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

