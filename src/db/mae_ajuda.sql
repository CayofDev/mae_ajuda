-- Active: 1700778124455@@127.0.0.1@3306@mae_ajuda
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
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
);

-- Tabela Profissional
CREATE TABLE Profissional (
    CPF CHAR(11) PRIMARY KEY,
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
);

-- Tabela Filho
CREATE TABLE Filho (
    CPF CHAR(11) PRIMARY KEY,
    Endereco VARCHAR(255),
    Vacinas VARCHAR(255),
    DataNascimento DATE,
    Doencas VARCHAR(255),
    Exames VARCHAR(255),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF)
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
