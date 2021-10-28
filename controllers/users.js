const db = require('../models');

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.User.findAll();
    res.send(allUsers);
  } catch (error) {
    console.error('Something went wrong');
    res.send({
      error: "Something went wrong",
    });
  } 
}

// Return User
module.exports.getUserById = async (req, res) => {
  var idUser = parseInt(req.params.id);
  try {
      const userById = await db.User.findByPk(idUser);
      res.send(userById);
  } catch (error) {
    console.error('Something went wrong');
    res.send({
      error: "Something went wrong",
    });
  }
}

module.exports.createUser = async (req, res) => {
  const {
    email,
    firstName,
    lastName,
  } = req.body

  try {
    const newUser = await db.User.create({
      email,
      firstName,
      lastName,
    });

    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong",
    });
  }
}

// Updated User
module.exports.updateUser = async (req, res) => {
  var idUser = parseInt(req.params.id);
  try {
    const update = await db.User.update({ lastName: "Sebastian" }, {
      where: {
        id:idUser
      }
    });
      try {
        const updatedUser = await db.User.findByPk(idUser);
        res.send(updatedUser);
      } catch (error) {
        console.error('User was not updated');
        res.send({
          error: "User was not updated",
        });
      }
} catch (error) {
  console.error('Something went wrong');
  res.send({
    error: "Something went wrong",
  });
  }
}

// Nothing
module.exports.deleteUser = async (req, res) => {
  var idUser = parseInt(req.params.id);
  try {
    const deletedUser = await db.User.destroy({
      where: {
        id:idUser
      }
    });
    res.sendStatus(204);
} catch (error) {
  console.error('Something went wrong');
  res.send({
    error: "Something went wrong",
  });
  }
}
