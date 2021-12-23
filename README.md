# 🚀 Desafio 01 - Bootcamp Ignite (Rocketseat)
![node-js-badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![js-badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📙 1. Sobre o desafio
Este desafio consiste na criação de uma API utilizando o Node.js com o JavaScript para a criação de listas de afazeres (TODOs) a fim de organizar melhor a vida do usuário! 

## 🏃 2. Como rodar o desafio
Basta dar um git clone neste repositório, carregar as dependências, executar o comando para iniciar o servidor Node e utilizar algum software como Insomnia ou Postman para as requisições
```
git clone https://github.com/Seiixas/desafio01-ignite-nodejs.git
cd desafio01-ignite-nodejs
yarn
yarn dev
```

## ⚙️ 3. Funcionalidades
### 😃 3.1. Criar uma conta para o usuário.
Utilizando a rota `localhost:3333/users` é possível criar um novo usuário passando pelo corpo da requisição os parâmetros: 
```json
{
    "name": "Mateus Silva Seixas",
    "username": "devSeixas"
}
```
Não é possível criar usuários com o mesmo username.

### 📜 3.2. Listar todos os TODOs de um usuário
Utilizando a rota `localhost:3333/todos` no método GET, é possível listar todos os TODOs de um usuário enviando o seu username pelo header da requisição.

### 🆕 3.3. Criar um novo TODO para o usuário
Utilizando a rota `localhost:3333/todos` no método POST, é possível criar um novo TODO para o usuário enviando o seu username pelo header e os seguintes parâmetros pelo corpo da requisição: 
```json
{
    "title": "Buscar o carro do mecânico",
    "deadline": "2021-12-22"
}
```
### 📝 3.4. Editar um TODO existente do usuário
Utilizando a rota `localhost:3333/todos/:id` no método PUT, é possível alterar um novo TODO para o usuário enviando o seu username pelo header, o ID do TODO a ser editado pelos Route Params e os seguintes parâmetros pelo corpo da requisição: 
```json
{
    "title": "Buscar o carro na concessionária",
    "deadline": "2021-12-30"
}
```

### ✔️ 3.5. Marcar um TODO como feito
Utilizando a rota `localhost:3333/todos/:id` no método PATCH, é possível alterar o status de um todo para feito! É necessário enviar o username pelo header e o ID do TODO pelo Route Params.

### ❌ 3.6. Deletar um TODO existente do usuário
Utilizando a rota `localhost:3333/todos/:id` no método DELETE, é possível deletar um TODO específico. É necessário enviar o username pelo header e o ID do TODO pelo Route Params.
