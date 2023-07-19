# CubeIN
Documentação-CubeIN(finalProject)
[GET]/cubos

Retorna todos os cubos cadastrados.

Resposta: HTTP 200 OK

 [
	{
		"_id": "64b5d7e97c8e2b6db7130fb1",
		"categoria": "3x3x3",
		"preco": 75.9,
		"marca": "GAN",
		"createdAt": "2023-07-18T00:06:53.366Z",
		"__v": 0
	}
]


[POST] /cuboNovo

Cadastrar novo cubo.

Requisita body segundo o exemplo:
{  
	"modelo": "2x2x2",
	"preco": 55.99,
	"marca": "GAN" 
}

Resposta HTTP 201 OK
{
	"novoCubo": {
		"preco": 55.99,
		"marca": "GAN",
		"createdAt": "2023-07-18T00:30:10.666Z",
		"_id": "64b5dd1534ecb55221952d1b",
		"__v": 0
	}
}


[PATCH]/editarCubo/{id}

Editar o cadastro dos cubos.

Necessita de ID.
Requisita de autenticação.

Requisita body segundo o exemplo:
{   
    "categoria": "3x3x3",
		"preco": 75.90,
		"marca": "GAN"
}

Resposta: HTTP 200 OK
{
	"encontraCubo": {
		"_id": "64b5d7e97c8e2b6db7130fb1",
		"categoria": "3x3x3",
		"preco": 75.9,
		"marca": "GAN",
		"createdAt": "2023-07-18T00:06:53.366Z",
		"__v": 0
	}
}


[DELETE]/deletaCubo/{ID}

Excluir cadastro do cubo.

Requer ID.
Requer autenticação.

Resposta: HTTP  200 OK
{
	"message": "Produto Deletado"
}


[GET]/usuarios

Retorna todos os usuarios cadastrados.

Resposta: HTTP 200 OK
[
	{
		"_id": "64b5db27f6f69a9a86a306a8",
		"nome": "murilo",
		"email": "murilo@gmail.com",
		"password": "$2b$10$EuNdTH28HtERMB1KSKwBHeQebVp1tDoeg0BW716BVwmy8I6jyT1EO",
		"createdAt": "2023-07-18T00:21:55.631Z",
		"__v": 0
	}
]


[POST]/novoUsuario

Criar novo Usuário

Requisita body segundo o exemplo:
{
	"nome": "murilo",
	"email": "murilo@gmail.com",
	"password": "1234"
}

Resposta: HTTP 201 Created
{
	"message": "Usuário criado com sucesso",
	"savedUser": {
		"nome": "murilo",
		"email": "murilo@gmail.com",
		"password": "$2b$10$EuNdTH28HtERMB1KSKwBHeQebVp1tDoeg0BW716BVwmy8I6jyT1EO",
		"createdAt": "2023-07-18T00:21:55.631Z",
		"_id": "64b5db27f6f69a9a86a306a8",
		"__v": 0
	}
}


[POST]/login

Loga apenas usuários cadastrados.

Requer body conforme exemplo:
{
	"email": "murilo@gmail.com",
	"password": "1234"
}
Retorna um token para autenticação, caso queira editar ou excluir um livro.
Resposta: HTTP 200 OK
{
	"message": "Login efetuado com sucesso",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODk2Mzk3OTF9.dfpJtkNnmdaORoXqS76SM4_LLySREgHp5XthCQJsCFA"
}


Arquitetura do Projeto:
📂 CubeIN
├─ 📂 node_modules
├─ 📂 src
│ ├─ 📂 controllers
│ │ └─ authControllers.js
│ │ └─ cuboControllers.js
│ │ └─ usuarioControllers.js
│ ├─ 📂 database
│ │ └─ mongoConfig.js
│ ├─ 📂 middlewares
│ │ └─ auth.js
│ ├─ 📂 models
│ │ └─ cuboSchema.js
│ │ └─ usuarioSchema.js
│ ├─ 📂 routes
│ │ └─ cuboRoutes.js
│ └─ app.js
├─ .env
├─ .env.example
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
└─ server.js

Dependências:

Dependência
Versão
bcrypt
^5.0.1
cors
^2.8.5
dotenv
^16.3.1
dotenv-safe
^8.2.0
express
^4.18.2
jsonwebtoken
^9.0.0
mongoose
^7.3.1
nodemon
^2.0.22
i
^0.3.7
npm
^9.7.2


