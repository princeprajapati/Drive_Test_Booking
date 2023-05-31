const User = require("../models/driverDetails");
module.exports = (req, res) => {
    const {
        fname,
        lname,
        licensenumber,
        age,
        dob,
        make,
        model,
        year,
        platnumber,
    } = req.body;
    try {
        User.findByIdAndUpdate(
            req.session.userId, {
                fname,
                lname,
                licensenumber,
                age,
                dob,
                car_details: {
                    make,
                    model,
                    year,
                    platnumber,
                },
            },
            (error, user) => {
                if (error) {
                    console.log(error);
                    res.redirect("/g2");
                } else {
                    console.log(user);
                    res.redirect("/g");
                }
            }
        );
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};