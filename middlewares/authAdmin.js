const User = require('../models/user')

const authAdmin = async (req, res, next) =>{
    try {
        const user = await User.findById(req.user.id)
        if(!user) return res.status(400).send({msg: "This user is not exist"})
        
        if(user.role === "user") return res.status(400).send({msg: "Can not access to this resource"})

        next();
        
    } catch (err) {
        return res.status(500).send({msg: err.message})
    }
}


module.exports = authAdmin;