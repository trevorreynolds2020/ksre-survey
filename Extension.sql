USE [master]; -- Database here.


IF SCHEMA_ID(N'AEContacts') IS NULL
   EXEC(N'CREATE SCHEMA [AEContacts];');
GO

/***************
 * Drop Tables*
 ***************/
DROP TABLE IF EXISTS AEContacts.Direct
DROP TABLE IF EXISTS AEContacts.Indirect
DROP TABLE IF EXISTS AEContacts.Event
DROP TABLE IF EXISTS AEContacts.Report
GO

CREATE TABLE AEContacts.Direct
(
    [Name] NVARCHAR(64) NOT NULL PRIMARY KEY,
    County NVARCHAR(64) NOT NULL,
	ContactDate DATE NOT NULL,
	GrandChallenge NVARCHAR(64) NOT NULL,
	Gender NVARCHAR(64) NOT NULL,
	Race NVARCHAR(64) NOT NULL,
	Ethnicity NVARCHAR(64) NOT NULL,
	[Comment] NVARCHAR(64)
);

CREATE TABLE AEContacts.Indirect
(
	ContactDate DATE NOT NULL PRIMARY KEY,
	MethodOfContact NVARCHAR(64) NOT NULL,
	Topic NVARCHAR(64) NOT NULL,
	GrandChallenge NVARCHAR(64) NOT NULL,
	[Comment] NVARCHAR(64)	
);

CREATE TABLE AEContacts.EVENT
(
	ContactDate DATE NOT NULL PRIMARY KEY,
	County NVARCHAR(64) NOT NULL,
	MaleTotal INT,
	FemaleTotal INT,
	OtherTotal INT,
	HispanicTotal INT,
	NonHispanicTotal INT,
	UnknownTotal INT,
	GrandChallenge NVARCHAR(64) NOT NULL,
	[Comment] NVARCHAR(64)	
);

CREATE TABLE AEContacts.Report
(
	ContactDate DATE NOT NULL PRIMARY KEY,
	Counties NVARCHAR(64),
	WorkHours INT NOT NULL,
	SickOrVacation NVARCHAR(64),
	LeaveHours INT,
	Miles INT,
	OnsiteOrRemote NVARCHAR(64),
	[Comment] NVARCHAR(64)	
);