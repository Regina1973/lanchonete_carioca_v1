module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token ausente" });
  }

  // aqui você valida o token depois
  next();
};