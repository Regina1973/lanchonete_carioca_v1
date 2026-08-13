# TESTES V3

## Produtos

### Criar Produto

- [ ] Nome obrigatório
- [ ] Preço obrigatório
- [ ] Produto criado com sucesso

### Listar Produtos

- [ ] Lista vazia
- [ ] Lista com produtos

### Buscar Produto

- [ ] Produto existente
- [ ] Produto inexistente

### Atualizar Produto

- [ ] Atualização válida
- [ ] Produto inexistente

### Remover Produto

- [ ] Exclusão válida
- [ ] Produto inexistente

---

## Categorias

### Criar Categoria

- [ ] Categoria criada

### Listar Categorias

- [ ] Lista retornada

### Buscar Categoria

- [ ] Categoria existente
- [ ] Categoria inexistente

### Atualizar Categoria

- [ ] Atualização válida

### Excluir Categoria

- [ ] Exclusão válida

---

## Pedidos

### Criar Pedido

- [ ] Pedido criado
- [ ] Produto inexistente
- [ ] Quantidade inválida

### Listar Pedidos

- [ ] Lista retornada

### Atualizar Status

- [ ] Aberto
- [ ] Em preparo
- [ ] Entregue
- [ ] Cancelado

---

## Estoque

### Entrada

- [ ] Aumenta quantidade

### Saída

- [ ] Diminui quantidade

### Validação

- [ ] Não permite estoque negativo

---

## Permissões

### Admin

- [ ] Criar produto
- [ ] Atualizar produto
- [ ] Excluir produto

### Employee

- [ ] Consultar informações permitidas

### Customer

- [ ] Sem acesso administrativo

---

## Testes Automatizados

### Produtos

- [x] Arquivo product.test.js criado
- [x] GET /products retorna 200
- [ ] GET /products/:id
- [ ] POST /products
- [ ] PUT /products/:id
- [ ] DELETE /products/:id

### Categorias

- [x] Arquivo category.test.js criado
- [ ] Implementar testes

### Autenticação

- [x] Arquivo auth.test.js criado
- [ ] Revisar cobertura

---

## Persistência

### Produtos

- [ ] createProduct salva no products.json
- [ ] updateProduct salva no products.json
- [ ] deleteProduct remove do products.json

### Categorias

- [ ] createCategory salva no categories.json
- [ ] updateCategory salva no categories.json
- [ ] deleteCategory remove do categories.json

---

## Validações da API

### Produtos

- [ ] ID inválido
- [ ] Nome vazio
- [ ] Preço inválido
- [ ] Preço negativo

### Categorias

- [ ] ID inválido
- [ ] Nome vazio

### Respostas HTTP

- [ ] Retorna 200 em sucesso
- [ ] Retorna 400 em dados inválidos
- [ ] Retorna 404 quando registro não existe
- [ ] Retorna 500 em erro interno

---

## Auditoria de Testes

### Produtos

- [x] product.test.js auditado

### Categorias

- [x] category.test.js auditado
- [ ] Implementar conteúdo do arquivo

### Autenticação

- [ ] Auditar auth.test.js

### Clientes

- [ ] Auditar clients.controller.test.js