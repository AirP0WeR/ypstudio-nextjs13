import {authUserTest} from '../../../controllers/userController.js'


export default function handler (req, res) {
    if (req.method === "POST") {
        authUserTest (req, res);
    } else {
        res.status(200).json({ message: "Не верный запрос"})
    }
}
  