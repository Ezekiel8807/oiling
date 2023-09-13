// admin login api
export const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password ) return res.status(401).json({ msg: "Invalid credentials. " });

        //check if user exist with that username
        const user = await userData.findOne({ username: username });
        if (!user) return res.status(404).json({ msg: "Admin does not exist. " });
    
        //encrypt user password and compare 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}