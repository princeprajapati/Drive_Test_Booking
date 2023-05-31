const User = require("../models/driverDetails");
module.exports = async(req, res) => {
    try {
        const user = await User.findById(req.session.userId);

        res.render("g", {
            driverDetails: user,
        });
    } catch (error) {
        res.render("g", {
            driverDetails: false,
        });
    }
};