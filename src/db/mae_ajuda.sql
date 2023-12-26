-- Active: 1700778124455@@127.0.0.1@3306@mae_ajuda


use mae_ajuda;
-- Tabela Pessoa
CREATE TABLE Pessoa (
    CPF CHAR(11) PRIMARY KEY,
    Email VARCHAR(255),
    Telefone VARCHAR(20),
    Nome VARCHAR(255)
);

-- Tabela Usuario
CREATE TABLE Usuario (
    CPF CHAR(11) PRIMARY KEY,
    CEP VARCHAR(10),
    senha VARCHAR(30),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
);

drop TABLE Usuario;
select * from Usuario;
describe Usuario;

-- Tabela Profissional
CREATE TABLE Profissional (
    CPF CHAR(11) PRIMARY KEY,
    senha VARCHAR(30),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
);

CREATE TABLE Medico (
    CPF CHAR(11) PRIMARY KEY,
    ESPECIALIDADE CHAR(30),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
);


-- Tabela Filho
CREATE TABLE Filho (
    CPF CHAR(11) PRIMARY KEY,
    CPF_Usuario CHAR(11),
    Endereco VARCHAR(255),
    Vacinas VARCHAR(255),
    DataNascimento DATE,
    Doencas VARCHAR(255),
    Exames VARCHAR(255),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF),
    FOREIGN KEY (CPF_Usuario) REFERENCES Usuario(CPF)
);

-- Tabela Eventos
CREATE TABLE Eventos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Profissional_CPF CHAR(11),
    Usuario_CPF CHAR(11),
    Endereco VARCHAR(255),
    Paciente VARCHAR(255),
    Consulta VARCHAR(255),
    Data DATE,
    Hora TIME,
    Status VARCHAR(50),
    Ultima_Alteracao TIMESTAMP,
    Medico VARCHAR(255),
    Especialidade VARCHAR(255),
    FOREIGN KEY (Profissional_CPF) REFERENCES Profissional(CPF),
    FOREIGN KEY (Usuario_CPF) REFERENCES Usuario(CPF)
);


-- Tabela Mensagem
CREATE TABLE Mensagem (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Usuario_CPF CHAR(11),
    Profissional_CPF CHAR(11),
    Mensagem VARCHAR(255),
    Data DATE,
    Hora TIME,
    FOREIGN KEY (Usuario_CPF) REFERENCES Usuario(CPF),
    FOREIGN KEY (Profissional_CPF) REFERENCES Profissional(CPF)
);

show tables;

INSERT INTO Filho (CPF, Endereco, Vacinas, DataNascimento, Doencas, Exames)
VALUES ('12345678901', 'Rua A, 123', 'BCG, Hepatite B', '2020-01-15', 'Nenhuma', 'Check-up anual'),
       ('98765432101', 'Av. B, 456', 'Hepatite B, Tríplice Viral', '2019-05-20', 'Alergia a amendoim', 'Hemograma completo');

-- Inserir dados na tabela Eventos
INSERT INTO Eventos (Profissional_CPF, Usuario_CPF, Endereco, Paciente, Consulta, Data, Hora, Status, Ultima_Alteracao, Medico, Especialidade)
VALUES ('11122233344', '12345678901', 'Hospital X, Sala 101', 'João Silva', 'Consulta de Rotina', '2023-01-10', '10:00:00', 'Agendado', CURRENT_TIMESTAMP, 'Dr. Oliveira', 'Cardiologia'),
       ('11122233344', '98765432101', 'Clínica Y, Sala 202', 'Maria Souza', 'Exame de Sangue', '2023-02-15', '15:30:00', 'Pendente', CURRENT_TIMESTAMP, NULL, NULL);

-- Inserir dados na tabela Mensagem
INSERT INTO Mensagem (Usuario_CPF, Profissional_CPF, Mensagem, Data, Hora)
VALUES ('12345678901', '11122233344', 'Olá Dr. Oliveira, estou aguardando a consulta.', '2023-01-05', '14:20:00'),
       ('98765432101', '11122233344', 'Dr. Oliveira, quando posso marcar um novo exame?', '2023-02-10', '11:45:00');

       -- Inserir dados na tabela Pessoa
INSERT INTO Pessoa (CPF, Email, Telefone, Nome)
VALUES ('12345678901', 'joao@email.com', '123-456-7890', 'João Silva'),
       ('98765432101', 'maria@email.com', '987-654-3210', 'Maria Souza'),
       ('11122233344', 'carlos@email.com', '111-222-3334', 'Carlos Oliveira');

-- Inserir dados na tabela Usuario
INSERT INTO Usuario (CPF, CEP,senha)
VALUES ('12345678901', '12345','12345'),
       ('98765432101', '54321','12345');

-- Inserir dados na tabela Profissional
INSERT INTO Profissional (CPF,senha)
VALUES ('11122233344','12345');

-- Inserir dados na tabela Medico
INSERT INTO Medico (CPF, ESPECIALIDADE)
VALUES ('11122233344', 'Cardiologia');

-- Inserir dados na tabela Filho
INSERT INTO Filho (CPF, Endereco, Vacinas, DataNascimento, Doencas, Exames)
VALUES ('12345678901', 'Rua A, 123', 'BCG, Hepatite B', '2020-01-15', 'Nenhuma', 'Check-up anual'),
       ('98765432101', 'Av. B, 456', 'Hepatite B, Tríplice Viral', '2019-05-20', 'Alergia a amendoim', 'Hemograma completo');

-- Inserir dados na tabela Eventos
INSERT INTO Eventos (Profissional_CPF, Usuario_CPF, Endereco, Paciente, Consulta, Data, Hora, Status, Ultima_Alteracao, Medico, Especialidade)
VALUES ('11122233344', '12345678901', 'Hospital X, Sala 101', 'João Silva', 'Consulta de Rotina', '2023-01-10', '10:00:00', 'Agendado', CURRENT_TIMESTAMP, 'Dr. Oliveira', 'Cardiologia'),
       ('11122233344', '98765432101', 'Clínica Y, Sala 202', 'Maria Souza', 'E
       xame de Sangue', '2023-02-15', '15:30:00', 'Pendente', CURRENT_TIMESTAMP, NULL, NULL);

-- Inserir dados na tabela Mensagem
INSERT INTO Mensagem (Usuario_CPF, Profissional_CPF, Mensagem, Data, Hora)
VALUES ('12345678901', '11122233344', 'Olá Dr. Oliveira, estou aguardando a consulta.', '2023-01-05', '14:20:00'),
       ('98765432101', '11122233344', 'Dr. Oliveira, quando posso marcar um novo exame?', '2023-02-10', '11:45:00');


SELECT * FROM Pessoa;
SELECT * FROM `Medico`;
SELECT * FROM `Profissional`;

SELECT * FROM `Eventos`;
SELECT * FROM `Mensagem`;

SELECT * FROM `Usuario`;


