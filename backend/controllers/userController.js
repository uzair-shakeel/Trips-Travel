import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({data:user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, role, photo } = req.body;

    const newUser = await User.findByIdAndUpdate(userId, { username, email, role, photo });

    if (!newUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({message: "User Updated Successfully" , data: newUser});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getAllUsers, getSingleUser, updateUser, deleteUser };
