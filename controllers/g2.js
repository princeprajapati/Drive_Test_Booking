const User = require("../models/driverDetails");

module.exports = async(req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        if (user.fname == "default") {
            res.render("g2");
        } else {
            res.redirect("/g");
        }
    } catch (error) {
        res.redirect("/login");
    }
};