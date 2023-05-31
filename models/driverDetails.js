const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const driverDetails = new Schema({
        fname: { type: String, default: "default", required: true },
        lname: { type: String, default: "default", required: true },
        licensenumber: { type: String, default: "default", required: true },
        age: { type: Number, default: 0, required: true },
        dob: { type: Date, default: Date.now(), required: true },
        username: { type: String, default: "default", required: true, unique: true },
        password: { type: String, default: "default", required: true },
        usertype: {
                type: String,
                utype: ["driver", "examiner", "admin"],
                default: "driver",
                required: true,
        },
        car_details: {
                make: { type: String, default: "default", required: true },
                model: { type: String, default: "default", required: true },
                year: { type: Number, default: 0000, required: true },
                platnumber: { type: String, default: "default", required: true },
    }
});


const driverLicense_Info = mongoose.model('driverLicense_Info',driverDetails);
module.exports = driverLicense_Info;