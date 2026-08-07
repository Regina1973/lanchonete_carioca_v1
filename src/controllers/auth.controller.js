const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const { generateToken } = require("../utils/jwt");

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = userService.findByEmail(email);

  if (!user) {
    return res.status(401).json({ error: "Usuário não encontrado" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Senha inválida" });
  }

  const token = generateToken({
    id: user.id,
    email: user.email
  });

  return res.json({ token });
};

// REGISTER
exports.register = (req, res) => {
  const { email, password } = req.body;

  const existingUser = userService.findByEmail(email);

  if (existingUser) {
    return res.status(400).json({ error: "Usuário já existe" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = {
    id: Date.now(),
    email,
    password: hashedPassword
  };

  userService.createUser(newUser);

  return res.status(201).json(newUser);
};