import { loginServices, resgisterUserServices } from "../services/authServices.js";

export const register = async (req, res) => {

    const { username, email, password, name } = req.body;

    const { type, message } = await resgisterUserServices(username, email, password, name);

    if (type === 'USER_ALREADY_EXISTS' || type === 'EMAIL_ALREADY_IN_USE') return res.status(409).json(message);
    if (type === 'INVALID_PASSWORD') return res.status(400).json(message);
    if (type === 'INAVLID_MAIL') return res.status(400).json(message);

    return res.status(200).json("User has been created.");
};

export const login = async (req, res) => {

  const { username, password } = req.body;

  const { type, message } = await loginServices(username, password);

  if (type) return res.status(400).json(message);

  res.cookie("acessToken", message.token, {
    httoOnly: true,
  })
    .status(200)
    .json(message.others);
};

export const logout = (_req, res) => {

  res.clearCookie("acessToken", {
    secure: true,
    sameSite: "none",
  }).status(200).json("User has been logged out.");
};
