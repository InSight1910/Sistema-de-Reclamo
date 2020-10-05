drop database RECLAMOS
CREATE DATABASE RECLAMOS COLLATE Modern_Spanish_CS_AS
use RECLAMOS

CREATE TABLE USUARIOS
(
    CORREO varchar(100) unique,
    NOMBRE varchar(200),
    CONTRASEÑA varchar(50),
    RUT varchar(10) primary key,
    CONSTRAINT CHK_RUT CHECK (RUT LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9-^K-k]'),
    ROL varchar(30),
    NUMEROTELEFONO varchar(20),
    CONSTRAINT CHK_NUMEROTELEFONO CHECK (NUMEROTELEFONO LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    DIRECCION varchar(100)
)

CREATE TABLE RECLAMOS
(
    TIPORECLAMO varchar(100),
    NUMERORECLAMO int identity(1,1) primary key,
    DESCRIPCION varchar(8000),
    FECHA DATE,
    ESTADO varchar(100),
    ANTECEDENTES varchar(8000),
    RUT varchar(10),
    FECHA_TOPE DATE,
    COMENTARIOS varchar(8000),
    RUT_ADMIN varchar(10),
    SERVICIO varchar(200),
    foreign key (RUT_ADMIN) references USUARIOS(RUT) ,
    foreign key (RUT) REFERENCES USUARIOS(RUT) on delete cascade 
)

CREATE TABLE RESPUESTA(
    N_RECLAMO INT,
    RUT VARCHAR(10),
    TEXTO VARCHAR(2000),
    FECHA_RESPUESTA DATE
    FOREIGN KEY (N_RECLAMO) REFERENCES RECLAMOS(NUMERORECLAMO) on delete cascade,
    FOREIGN KEY (RUT) REFERENCES USUARIOS(RUT) 
)   