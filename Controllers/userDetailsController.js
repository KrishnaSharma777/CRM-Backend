import UserDetails from "../models/userDetails.js";

// Create a new user
const createUserDetails = async (req, res) => {
    try {
        const newUserDetails = new UserDetails(req.body);
        const savedUserDetails = await newUserDetails.save();
        res.status(201).json(savedUserDetails);
    } catch (error) {
        res.status(500).json({ message: "Error creating user details", error });
    }
};

// Get all user details
// Get all user details with pagination
const getAllUserDetails = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // current page
        const limit = parseInt(req.query.limit) || 10; // items per page
        const skip = (page - 1) * limit;

        const userDetails = await UserDetails.find().skip(skip).limit(limit);
        const totalUsers = await UserDetails.countDocuments();

        res.status(200).json({
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: page,
            userDetails,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving user details",
            error,
        });
    }
};

// Get user details by ID
// const getUserDetailsById = async (req, res) => {
//     try {
//         const userDetails = await UserDetails.findById(req.params.id);
//         if (!userDetails) {
//             return res.status(404).json({ message: 'User details not found' });
//         }
//         res.status(200).json(userDetails);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving user details', error });
//     }
// };

// Update user details by ID
// const updateUserDetailsById = async (req, res) => {
//     try {
//         const updatedUserDetails = await UserDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedUserDetails) {
//             return res.status(404).json({ message: 'User details not found' });
//         }
//         res.status(200).json(updatedUserDetails);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user details', error });
//     }
// };

// Delete user details by ID
// const deleteUserDetailsById = async (req, res) => {
//     try {
//         const deletedUserDetails = await UserDetails.findByIdAndDelete(req.params.id);
//         if (!deletedUserDetails) {
//             return res.status(404).json({ message: 'User details not found' });
//         }
//         res.status(200).json({ message: 'User details deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting user details', error });
//     }
// };

export { createUserDetails, getAllUserDetails };
// getAllUserDetails, getUserDetailsById, updateUserDetailsById, deleteUserDetailsById };
