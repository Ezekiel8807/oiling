import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import admins from "../model/adminSchema.js";

// admin login api
export const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password ) return res.status(401).json({ msg: "Invalid credentials. " });

        //check if user exist with that username
        const admin = await admins.findOne({ username: username });
        if (!admin) return res.status(404).json({ msg: "admin does not exist. " });
    
        //encrypt user password and compare 
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
        delete admin.password;
        res.status(200).json({ token, admin });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



// admin Registration api
export const createAdmin = async (req, res) => {
  try {
      const { username, password } = req.body;
      if (!username || !password ) return res.status(401).json({ msg: "Invalid credentials. " });

      //check if admin exist with that username
      const usernameExist = await admins.findOne({ username: username });
      if ( usernameExist ) return res.status(400).json({ msg: "Username taken!" });
  
      //Encrypt user password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newadmin = new admins({
          username,
          password: passwordHash,
      });

      const savedadmin = await newadmin.save();
      res.status(201).json({ msg: "Account created succesfully" });

    } catch (err) {
      res.status(500).json({ error: err.message });
  }
}