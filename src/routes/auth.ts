// src/routes/auth.ts
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readFileSync, writeFileSync } from 'fs';

const router = Router();
const DB_PATH = './src/db/data.json';

function readDB() {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'));
}
function saveDB(data: any) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const db = readDB();

  const user = db.users.find((u: any) => u.email === email);
  if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Senha inválida' });

  const token = jwt.sign({ id: user.id, role: user.role }, 'secret', {
    expiresIn: '1d',
  });

  res.json({ token, user });
});

export default router;