# Testes V2

## Cadastro

- [ ] Cadastro com email válido
- [ ] Cadastro sem email
- [ ] Cadastro sem senha
- [ ] Cadastro com usuário já existente

---

## Login

- [ ] Login válido
- [ ] Email inexistente
- [ ] Senha inválida

---

## JWT

- [ ] Token gerado com sucesso
- [ ] Token ausente
- [ ] Token inválido

---

## Profile

- [ ] Usuário autenticado acessa profile
- [ ] Usuário sem token recebe 401

---

## Roles

### Admin

- [ ] Login como admin
- [ ] Role admin presente no token
- [ ] Acesso permitido às rotas administrativas

### Employee

- [ ] Login como employee
- [ ] Role employee presente no token
- [ ] Bloqueado em rotas exclusivas de admin

### Customer

- [ ] Cadastro cria role customer
- [ ] Login como customer
- [ ] Acesso ao próprio profile

---

## Autorização

- [ ] 401 Token não fornecido
- [ ] 401 Token inválido
- [ ] 403 Acesso negado

---

## Tratamento de Erros

### 400

- [ ] Email obrigatório
- [ ] Senha obrigatória
- [ ] Usuário já existe

### 401

- [ ] Usuário não encontrado
- [ ] Senha inválida

### 403

- [ ] Usuário sem permissão

### 500

- [ ] Erro interno tratado

---

## Checklist Final da V2

- [ ] Login
- [ ] JWT
- [ ] Middleware
- [ ] Profile
- [ ] Roles
- [ ] Authorize Middleware
- [ ] Tratamento de Erros
- [ ] README atualizado
- [ ] Testes concluídos