create database RECLAMOS

use RECLAMOS

CREATE TABLE USUARIOS(
    CORREO varchar(100) unique,
    NOMBRE varchar(200),
    CONTRASEÑA varchar(50),
    RUT varchar(12) primary key,
	CONSTRAINT CHK_RUT CHECK (RUT LIKE '[0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]-[0-9-^K-k]'),
    ROL varchar(30),
    NUMEROTELEFONO varchar(20),
	CONSTRAINT CHK_NUMEROTELEFONO CHECK (NUMEROTELEFONO LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    DIRECCION varchar(100)
)

drop table usuarios
drop table reclamos
drop table respuesta
select * from reclamos

CREATE TABLE RECLAMOS(
    TIPORECLAMO varchar(100),
    NUMERORECLAMO int identity(1,1) primary key,
    DESCRIPCION varchar(8000),
    FECHA DATE,
    ESTADO varchar(100),
    ANTECEDENTES varchar(8000),
    RUT varchar(12),
	COMENTARIO varchar(8000),
    foreign key (rut) REFERENCES USUARIOS(RUT)
)
drop table reclamos

select * from reclamos
alter TABLE Reclamos add FECHA_TOPE DATE
select (cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(dd ,getDAte())as varchar) as Date)) as tiempo, (cast(cast(DATEPART(yy,getDAte())as varchar) +'-'+ cast(DATEPART(mm,getDAte())as varchar) +'-'+ cast(DATEPART(day, DATEADD("day", 2, getdate())) as varchar) as Date))

SELECT DATEadd("day", 2 ,GETDATE())




CREATE TABLE RESPUESTA(
    N_RECLAMO INT,
    RUT VARCHAR(12),
    TEXTO VARCHAR(2000),
    FECHA_RESPUESTA DATE
    PRIMARY KEY(N_RECLAMO)
    FOREIGN KEY (N_RECLAMO) REFERENCES RECLAMOS(NUMERORECLAMO),
    FOREIGN KEY (RUT) REFERENCES USUARIOS(RUT)
)
drop table respuesta
