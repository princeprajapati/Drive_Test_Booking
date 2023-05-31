const User = require("../models/driverDetails");
const bcrypt = require("bcrypt");

module.exports = async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (user) {
            const matchPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (matchPassword) {
                req.session.userId = user._id;
                res.redirect("/");
            } else {
                res.render("login");
            }
        }
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }

};