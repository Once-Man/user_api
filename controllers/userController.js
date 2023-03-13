const User = require('../models/user');


getAllUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    }catch(error){
        console.log(error);
    }
}

createUser = async(req, res) => {
    const userData = req.body;
    console.log(userData);
    try {
        const user = new User({
            user: userData.user,
            email: userData.email,
            password: userData.password
        });
        console.log(user);
        const createdUser = await user.save();
        res.status(201).json({
            status:'success',
            data: {
                createdUser
            }
        });
    }catch(error){
        console.log(error);
    }
}
updateUser = async(req, res) => {
    const id = req.params.id;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id,userData, {
        new: true
    });
    try{
        res.status(200).json({
            status: 'successfully updated',
            data: {
                updatedUser
            }
        });
    }catch(error){
        console.log(error);
    }
}
deleteUser = async(req, res)=> {
    try {
		await User.findByIdAndRemove({ _id: req.params.id })
		res.status(204).send();
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
}
getOneUser = async(req, res) => {
    const id = req.params.id;
    const oneUser = await User.findById({_id:id}).exec();
    res.status(201).json({
        status: 'success',
        data: {
            oneUser
        }
    })
}
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getOneUser
}