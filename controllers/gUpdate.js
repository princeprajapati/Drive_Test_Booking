const User = require("../models/driverDetails");
module.exports = async(req, res) => {
    let driverDetails;
    try {
        driverDetails = await User.findById(req.session.userId);
        driverDetails.car_details.make = req.body.make || driverDetails.car_details.make;
        driverDetails.car_details.model = req.body.model || driverDetails.car_details.model;
        driverDetails.car_details.year = req.body.year || driverDetails.car_details.year;
        driverDetails.car_details.platNo =
            req.body.platNo || driverDetails.car_details.platNo;
            driverDetails = await driverDetails.save();
        res.redirect("/g");
    } catch (error) {
        res.redirect("/");
    }
};