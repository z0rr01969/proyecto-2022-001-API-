const bcrypt = require('bcrypt');
const UserModel = require('./../models/userModel');

const registerUser = async (userData) => {
  try {
    const passHashed = await bcrypt.hash(userData.password, 10);
    userData.password = passHashed;
    const user = UserModel(userData);
    await user.save();
    return {
      response: user,
      httpStatus: 201
    }
  } catch (error) {
    return {
      response: "server error",
      httpStatus: 500,
    };
  }
};

const loginUser = async (userData) => {
  try {
    const user = await UserModel.findOne({ email: userData.email });
    if (user) {
      const match = await bcrypt.compare(userData.password, user.password);
      if (match) {
        // TODO: crear token
        return {
          response: {
            token: 'xxxxxyyyy'
          },
          httpStatus: 200
        }
      }
    }
    return {
      response: "user unauthorized",
      httpStatus: 401,
    }
  } catch (error) {
    return {
      response: "server error",
      httpStatus: 500,
    };
  }
}

const infoUser = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return {
      response: user,
      httpStatus: user ? 200 : 404
    }
  } catch (error) {
    return {
      response: "server error",
      httpStatus: 500,
    };
  }
} 

module.exports = {
  registerUser,
  loginUser,
  infoUser
}