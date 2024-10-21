const User = require('../model/user')

const addUser = async (req, res) => {

    // Write the code to add the user

    try {
        const { email, username, password, productList } = req.body;

        if (!(email && username && password && Array.isArray(productList))) {
            return res.status(400).send("Bad Request")
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(409).send("User Already exists !!")
        }

        const user = await User.create({
            email,
            username,
            password,
            productList
        });
        return res.status(201).json({
            message: "Created",
            user
        });

        // return res.status(201).json({
        //     message: "Created",
        //     user
        // });



    } catch (err) {
        return res.status(500).send('Internal server error')
    }

}

module.exports = addUser;