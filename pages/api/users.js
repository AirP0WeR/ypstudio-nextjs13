import {registerUser, getUsers} from '../../controllers/userController.js'

export default function handler (req, res) {
    if (req.method === "POST") {
        registerUser (req, res);
    } else if (req.method === "GET") {
        getUsers (req, res);
    } else {
        res.status(400).json({ message: "Wrong request"})
    }
}