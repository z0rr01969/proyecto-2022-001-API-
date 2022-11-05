const { registerUser, loginUser, infoUser } = require("../services/UsersService");

const signup = async (req, res) => {
    const user = req.body;
    const { response, httpStatus } = await registerUser(user); //registerUser se debe crear.
    res.status(httpStatus).json(response);
}

const login = async (req, res) => {
    const user = req.body; //email: ***, password: ***
    const { response, httpStatus } = await loginUser(user); //loginUser se debe crear.
    res.status(httpStatus).json(response);
}

// const info = async (req, res) => {
//     const id = ""; //falta el id usuario
//     const { response, httpStatus } = await infoUser(user); //infoUser se debe crear.
//     res.status(httpStatus).json(response);
// }

const info = async (req, res) => {
    const {id} = req.payload; //despues de crear el middleware
    const { response, httpStatus } = await infoUser(user); //infoUser se debe crear.
    res.status(httpStatus).json(response);
}

module.exports = {
    signup,
    login,
    info
}