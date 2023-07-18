import { getUserProfile } from '../../../controllers/userController.js'


export default function handler (req, res) {
    if (req.method === "GET") {
        getUserProfile (req, res);
    } else if (req.method === "PUT") {
        updateUserProfile (req, res);
    } else {
        res.status(400).json({ message: "Wrong request"})
    }
}