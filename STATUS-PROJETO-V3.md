# STATUS PROJETO V3

# STATUS PROJETO V3

## Produtos

Status: 🚧 Em Validação

### Estrutura

- [x] data.json (armazena produtos)
- [x] product.service.js
- [x] product.controller.js
- [x] product.routes.js

### Service

- [x] getProducts()
- [x] saveProducts()
- [x] getAllProducts()
- [x] getProductById()
- [x] createProduct()
- [x] updateProduct()
- [x] deleteProduct()

### CRUD

- [x] GET /products
- [x] GET /products/:id
- [x] POST /products
- [x] PUT /products/:id
- [x] DELETE /products/:id

### Auditoria

- [x] Revisar product.test.js
- [ ] Validar persistência createProduct()
- [ ] Validar persistência updateProduct()
- [ ] Validar persistência deleteProduct()
- [ ] Revisar arquivos legados

### Testes

#### Produtos

- [x] Arquivo de teste criado
- [x] GET /products retorna 200
- [ ] GET /products/:id
- [ ] POST /products
- [ ] PUT /products/:id
- [ ] DELETE /products/:id

### Pendências

- [ ] Validar persistência createProduct()
- [ ] Validar persistência updateProduct()
- [ ] Validar persistência deleteProduct()
- [ ] Aumentar cobertura dos testes

---

## Categorias

Status: ✅ CRUD Implementado

### Estrutura

- [x] categories.json
- [x] category.service.js
- [x] category.controller.js
- [x] category.routes.js

### Service

- [x] getCategories()
- [x] saveCategories()
- [x] getAllCategories()
- [x] getCategoryById()
- [x] createCategory()
- [x] updateCategory()
- [x] deleteCategory()

### CRUD

- [x] GET /categories
- [x] GET /categories/:id
- [x] POST /categories
- [x] PUT /categories/:id
- [x] DELETE /categories/:id

### Auditoria

- [x] Auditar category.controller.js
- [x] Auditar category.routes.js
- [x] Revisar category.test.js
- [ ] Validar persistência createCategory()
- [ ] Validar persistência updateCategory()
- [ ] Validar persistência deleteCategory()

### Testes

#### Categorias

- [x] Arquivo category.test.js criado
- [x] Arquivo auditado
- [ ] Implementar testes

### Pendências

- [ ] Validar persistência createCategory()
- [ ] Validar persistência updateCategory()
- [ ] Validar persistência deleteCategory()
- [ ] Implementar testes automatizados

---

## Pedidos

Status: ⬜ Não Iniciado

### Estrutura

- [ ] orders.json
- [ ] order.service.js
- [ ] order.controller.js
- [ ] order.routes.js

### CRUD

- [ ] GET /orders
- [ ] GET /orders/:id
- [ ] POST /orders
- [ ] PUT /orders/:id
- [ ] DELETE /orders/:id

---

## Estoque

Status: ⬜ Não Iniciado

### Estrutura

- [ ] stock.json
- [ ] stock.service.js
- [ ] stock.controller.js
- [ ] stock.routes.js

### CRUD

- [ ] GET /stock
- [ ] GET /stock/:id
- [ ] POST /stock
- [ ] PUT /stock/:id
- [ ] DELETE /stock/:id

---

## Melhorias da API

### Validações

- [ ] Validar IDs
- [ ] Validar campos obrigatórios
- [ ] Validar campos opcionais
- [ ] Validar textos vazios
- [ ] Validar tipos numéricos
- [ ] Validar arrays vazios
- [ ] Validar arrays de objetos

### Padronização

- [ ] Adicionar campo message
- [ ] Padronizar respostas de sucesso
- [ ] Padronizar erro 400
- [ ] Padronizar erro 404
- [ ] Padronizar erro 500

### Filtros

- [ ] Filtro por nome
- [ ] Filtro por categoria
- [ ] Filtro por preço

---

## Arquivos Legados Identificados

### Confirmados

- [x] src/controllers/products.controller.js
- [x] src/routes/products.ts
- [x] src/categories/category.service.js

### Revisados

- [x] src/services/api.js
- [x] src/services/storage.js

### Pendentes de Auditoria

- [ ] src/routes/auth.ts
- [ ] src/middlewares/auth.ts

---

## Frontend

Status: ⏳ Planejamento

### Pré-requisitos

- [x] Produtos auditado
- [x] Categorias auditada
- [ ] Pedidos implementado
- [ ] Estoque implementado

### Planejamento

- [ ] Criar branch frontend-v3
- [ ] Definir React + Vite
- [ ] Criar tela Login
- [ ] Criar Dashboard
- [ ] Criar tela Produtos
- [ ] Criar tela Categorias
- [ ] Criar tela Pedidos
- [ ] Criar tela Estoque

---

## Próximas Tarefas

1. Validar persistência de Produtos
2. Validar persistência de Categorias
3. Revisar src/routes/auth.ts
4. Revisar src/middlewares/auth.ts
5. Remover arquivos