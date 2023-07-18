import {authUser} from '../../../controllers/userController.js'


export default function handler (req, res) {
    if (req.method === "POST") {
        authUser (req, res);
    } else {
        res.status(400).json({ message: "Wrong request"})
    }
}
  