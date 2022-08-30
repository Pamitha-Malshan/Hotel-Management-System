const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const EmployeeRegisterRoutes = require('./Routes/EmployeeRegister');
const EmployeeAttendanceRoutes = require('./Routes/EmployeeAttendance');
const Register = require('./Routes/Register');

const app = express();



//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(multer());

app.use(EmployeeRegisterRoutes);
app.use(EmployeeAttendanceRoutes);
app.use(Register);


const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/HOTELSYSTEM?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(process.env.PORT || PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

