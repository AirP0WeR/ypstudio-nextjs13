import {deleteUser, getUserById, updateUser} from '../../../controllers/userController.js'

export default function handler (req, res) {
    if (req.method === "DELETE") {
        deleteUser (req, res);
    } else if (req.method === "GET") {
        getUserById (req, res);
    } else if (req.method === "PUT") {
        updateUser (req, res);
    } else {
        res.status(400).json({ message: "Wrong request"})
    }
}