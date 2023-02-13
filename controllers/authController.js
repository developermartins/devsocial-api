import { resgisterUserServices } from "../services/authServices.js";

export const register = async (req, res) => {

    const { username, email, password, name } = req.body;

    const { type, message } = await resgisterUserServices(username, email, password, name);

    if (type) return res.status(409).json(message);

    return res.status(200).json("User has been created.");
};

export const login = (req, res) => {

};

export const logout = (req, res) => {

};
