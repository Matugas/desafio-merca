# Desafio Backend MercaFácil
Projeto criado para a realização do desafio de backend da Mercafácil, desenvolvido por Matheus Anastácio

# Como executar o projeto
Abaixo você pode conferir como executar e testar este projeto!

## 🎲 Criar banco de dados
- Abra o Docker
- Entre na pasta **desafio-resources** e rode `docker compose up`
- Rode os arquivos .SQL que estão na pasta **desafio-resources** em seus respectivos bancos de dados
- Crie um banco de dados novo no PostgreSQL com o nome de **desafio-merca**
- Rode também o arquivo **desafio-merca.sql** que está na pasta `./src/sql`, no banco **desafio-merca**

> DICA \
> O arquivo desafio-merca.sql irá criar e popular a tabela clients com os clientes Macapá e Varejão \
> Atualmente a senha está em *plain text* para o desafio mas o correto para produção seria encriptar a senha utilizando por exemplo o **bcrypt**

## 🔑 Definir variáveis de ambiente

> Para facilitar os testes do desafio, removi o arquivo `.env` do .gitignore \
> assim sendo, não é necessário criar o arquivo conforme o tutorial

Para a api rodar é necessário definir algumas variaveis de ambiente \
Seguindo o arquivo de exemplo **.env.example**:
- Crie um arquivo na raíz do projeto chamado **.env** 
- Copie o conteúdo do **.env.example** para o arquivo **.env** que você criou
- Defina os valores para cada variável
- As 3 primeiras variáveis são strings connections dos bancos
- O **ACCESS_TOKEN_SECRET** fica a seu critério, para os testes eu usei **"my_super_secret123"**


## ▶️ Executando a API
Para rodar a API, basta executar o comando:
```
npm start
```


## 🌙 Importar collection do Insomnia para testes
Na raíz do projeto existe um arquivo chamado **InsomniaDocument.json** \
Este arquivo pode ser importado para o Insomnia para facilitar os testes nesta api

Utilize a request `Desafio Mercafácil/Cliente {Macapá ou Varejão}/Login` para se autenticar na API passando login e senha e recebendo um access token (JWT) \
Copie o **accessToken** retornado no Login e coloque nas outras requests no **Header de Authorization do tipo Bearer** \
Rode a request `Desafio Mercafácil/Cliente {Macapá ou Varejão}/Create contacts` para inserir os contatos no banco de dados

Utilize as requests `Get one contact` e `Get all contacts` livremente para testar se foi tudo inserido corretamente \
basta trocar o accessToken para a busca ser feita no banco do cliente do token! 🥳🥳

Ou confira no banco de dados se está tudo certo!

## 🧪 Executando testes unitários
Para executar os testes unitários, basta rodar o comando:
```
npm run test
```
E os métodos da classe Validators serão testados de algumas maneiras!