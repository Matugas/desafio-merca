-- Criar banco no postgres com o nome "desafio-merca"

-- Cria tabela de clientes
CREATE TABLE clients (
	id serial PRIMARY KEY,
	login VARCHAR ( 50 ) NOT NULL,
	password VARCHAR ( 100 ) NOT NULL
);

-- Insere dois clientes: Macapá e Varejão
INSERT INTO clients (login, password) VALUES ('macapa', '1234');
INSERT INTO clients (login, password) VALUES ('varejao', '5678');
