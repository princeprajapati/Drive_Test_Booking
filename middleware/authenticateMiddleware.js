const User = require("../models/driverDetails");

module.exports = async(req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user || user.usertype != "driver") {
            return res.redirect("/");
        }
        next();
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};