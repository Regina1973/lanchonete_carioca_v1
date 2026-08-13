# STATUS PROJETO V3

## Produtos

### Estrutura

- [x] products.json
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

---

## Categorias

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

### Auditoria

- [ ] Auditar category.controller.js
- [ ] Auditar category.routes.js
- [x] Revisar category.test.js
- [ ] Validar persistência createCategory()
- [ ] Validar persistência updateCategory()
- [ ] Validar persistência deleteCategory()

### Testes

#### Categorias

- [x] Arquivo category.test.js criado
- [x] Arquivo auditado
- [ ] Implementar testes

---

## Pedidos

- [ ] Iniciar

---

## Estoque

- [ ] Iniciar

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

- [ ] Adicionar message
- [ ] Padronizar erro 400
- [ ] Padronizar erro 404
- [ ] Padronizar erro 500

### Filtros

- [ ] Filtro por nome
- [ ] Filtro por categoria
- [ ] Filtro por preço

---

## Arquivos Legados Identificados

- [x] src/controllers/products.controller.js
- [x] src/routes/products.ts
- [x] src/categories/category.service.js
- [ ] Revisar src/services/api.js
- [ ] Revisar src/services/storage.js
- [ ] Revisar src/routes/auth.ts
- [ ] Revisar src/middlewares/auth.ts

---

## Próximas Tarefas

1. Auditar category.controller.js
2. Auditar category.routes.js
3. Validar CRUD de Categorias
4. Validar persistência das Categorias
5. Revisar arquivos legados
6. Atualizar Visão Macro
7. Iniciar planejamento do Frontend
