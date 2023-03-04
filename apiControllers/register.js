const bcrypt = require('bcrypt');

const userRegisterController = (req, res) => {
    console.log('Starting User Registration');
    const userDetails = req.body;
    console.log("Registration Details =>", userDetails);
    const password = userDetails.password;
    bcrypt.genSalt(8, (err, salt) => {
        if (err) {
            console.log(err);
        }
        else {
            bcrypt.hash(password, salt, (err,hashedPassword) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Registration Successful');
                    res.send({'hashedPassword': hashedPassword})
                }
            } )
        }
    })
}
module.exports = { userRegisterController };