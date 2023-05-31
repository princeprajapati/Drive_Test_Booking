const mongoose = require('mongoose')
const driverLicense_Info = require('./models/driverDetails')
mongoose.connect('mongodb+srv://prince2316:1234@cluster0.c13fbt4.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('connected', () =>{
    console.log('Connected to the database');
});
driverLicense_Info.create({
        firstname: 'prince',
        lastname: 'prajapati',
        LicenseNo: 'pri1234',
         Age: '24',
        car_details: {
        make: 'BMW',
        model: 'X5',
        year: '2020',
        platno: 'GOTCHA'
        }
});