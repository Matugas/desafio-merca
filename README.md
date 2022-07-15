# Desafio Backend MercaFácil
Projeto criado para a realização do desafio de backend da Mercafácil, desenvolvido por Matheus Anastácio

# ▶️ Como executar o projeto
Abaixo você pode conferir como executar e testar este projeto!

## 🎲 Criar banco de dados
- Abra o Docker
- Entre na pasta **desafio-resources** e rode `docker compose up`
- Rode os arquivos .SQL que estão na pasta **desafio-resources** em seus respectivos bancos de dados
- Crie um banco de dados novo no PostgreSQL com o nome de **desafio-merca**
- Rode também o arquivo **desafio-merca.sql** que está na pasta `./src/sql` no banco **desafio-merca**

> DICA \
> O arquivo desafio-merca.sql irá criar e popular a tabela clients com os clientes Macapá e Varejão \
> Atualmente a senha está em *plain text* para o desafio mas o correto para produção seria encriptar a senha utilizando por exemplo o **bcrypt**

## 🔑 Definir variáveis de ambiente
Para a api rodar é necessário definir algumas variaveis de ambiente \
Seguindo o arquivo de exemplo **.env.example**:
- Crie um arquivo na raíz do projeto chamado **.env** 
- Copie o conteúdo do **.env.example** para o arquivo **.env** que você criou
- Defina os valores para cada variável
- Para fins do desafio a senha dos 3 banco de dados é **"admin"**
- O segredo do token de acesso fica a seu critério, para os testes eu usei **"my_super_secret123"**


## 🌙 Importar collection do Insomnia para testes
Na raíz do projeto existe um arquivo chamado **Insomnia.json** \
Este arquivo pode ser importado para o Insomnia para facilitar os testes nesta api
