import bcrypt from "bcrypt";


//DataBase model
import userData from "../model/userSchema.js";


export const singleUser = async (req, res) => {
    try{
        const { id } = req.params;

        //check if user exist with that username
        const user = await userData.findById(id);
        res.status(200).json(user);

    }catch(err){
        res.status(404).json({ msg: "Invalid credentials. " });
    }
}

export const getAllUser = async (req, res) => {
    try{

        //check if user exist with that username
        const user = await userData.find();
        res.status(200).json(user);

    }catch(err){
        res.status(404).json({ msg: "Invalid credentials. " });
    }
}



export const updateUser = async (req, res) => {

    const {
        firstname, 
        lastname, 
        phone, 
        email,
        city,
        state,
        country,
        address 
    } = req.body;


    try {
        // Find the user by ID and update the fields
        const updatedUser = await userData.findByIdAndUpdate(
            req.params.id, // Assuming you're passing the user ID in the URL params
            {
                firstname, 
                lastname, 
                phone, 
                email,
                city,
                state,
                country,
                address,
                isUpdated: true
            },
            { new: true } // Return the updated user after update
        );

        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "Profile updated"});

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


export const updatePassword = async(req, res) => {

    const {oldPass, newPass, userId} = req.body;

    if(!oldPass || !newPass || !userId){
        res.status(500).json({msg: "Something went worng"})

    }else{

        try{

            //check if user exist with that username
            const user = await userData.findById(userId);
            if (!user) return res.status(404).json({ msg: "User does not exist. " });

            //encrypt user password and compare 
            const isMatch = await bcrypt.compare(oldPass, user.password);
            if (!isMatch) return res.status(401).json({ msg: "Invalid credentials. " });

            //Encrypt user password
            const salt = await bcrypt.genSalt();
            const oldpassHash = await bcrypt.hash(newPass, salt);

            //update user password
            const updatedPass = await userData.findByIdAndUpdate(userId, {password: oldpassHash}, { new: true });
            if(!updatedPass) return res.status(404).json({ msg: "User not found" });

            res.status(200).json({ msg: "Password succesfully changed" });

        } catch (err) {
            res.status(500).json({ error: err.msg });
        }
    }


}

export const delUser = async(req, res) => {

    const userId = req.params.id;


    const deletedUser = userData.findByIdAndDelete(userId);
    console.log(deletedUser);
}