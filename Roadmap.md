# 🍔 Lanchonete Carioca

## Objetivo

Organizar o projeto em versões para evitar misturar infraestrutura, autenticação e regras de negócio.

---

# ✅ V2 - Organização e Segurança

## Estrutura do Projeto

- [ ] Revisar app.js
- [ ] Revisar server.js
- [ ] Organizar rotas
- [ ] Organizar controllers
- [ ] Organizar middlewares
- [ ] Organizar services
- [ ] Organizar models
- [ ] Revisar imports e exports

---

## Autenticação

- [x] Cadastro de Usuário
- [x] Login
- [x] JWT
- [x] Middleware de Autenticação
- [x] Rota Protegida (/profile)

---

## Perfis de Usuário

- [ ] Criar role no User
- [ ] Admin
- [ ] Employee
- [ ] Customer

Exemplo:

```js
role: {
  type: String,
  enum: ["admin", "employee", "customer"],
  default: "customer"
}

🍔 Lanchonete Carioca
Objetivo
Organizar o projeto em versões para evitar misturar infraestrutura, autenticação e regras de negócio.

✅ V2 - Organização e Segurança
Estrutura do Projeto
Revisar app.js
Revisar server.js
Organizar rotas
Organizar controllers
Organizar middlewares
Organizar services
Organizar models
Revisar imports e exports
Autenticação
Cadastro de Usuário
Login
JWT
Middleware de Autenticação
Rota Protegida (/profile)
Perfis de Usuário
Criar role no User
Admin
Employee
Customer
Exemplo:

role: {
  type: String,
  enum: ["admin", "employee", "customer"],
  default: "customer"

