const bcrypt = require("bcrypt");

const driverLicense_Info = require("../models/driverDetails");

module.exports = async(req, res) => {
    const { username, password, usertype } = req.body;
    try {
        const isUser = await driverLicense_Info.findOne({
            username,
        });

        if (isUser) {
            res.render("login", {
                signUpMessage: "username is already exsist!",
                loginMessage: "",
            });
            return;
        }
        if (password[0] === password[1]) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password[0], salt);
            const user = await driverLicense_Info.create({
                username,
                password: hashPassword,
                usertype: usertype,
            });

            res.render("login", {
                signUpMessage: "Successully Registered!",
                loginMessage: "",
            });
        } else {
            res.render("login", {
                signUpMessage: "Password is not matched!",
                loginMessage: "",
            });
        }
    } catch (error) {
        console.log(error);
        res.render("login", {
            signUpMessage: " Registration is not Successful, Please try again!",
            loginMessage: "",
        });
    }
};