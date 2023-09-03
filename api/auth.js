import bcrypt from "bcrypt"


//DataBase model
import userData from "../model/userSchema.js";


//user  registration api
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password ) return res.status(400).json({ msg: "Invalid credentials. " });

        //check if user exist with that username
        const user = await userData.findOne({ username: username });
        console.log(user);
        if (user) return res.status(500).json({ msg: "User exist. " });
    
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new userData({
            "userId": username,
            username,
            email,
            password: passwordHash,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// user login api
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password ) return res.status(401).json({ msg: "Invalid credentials. " });

        //check if user exist with that username
        const user = await userData.findOne({ username: username });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
    
        //encrypt user password and compare 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials. " });
    
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // delete user.password;
        res.status(200).json({ user });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}