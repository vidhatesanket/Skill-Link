DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;

DROP TABLE IF EXISTS BookingList;
DROP TABLE IF EXISTS Feedback;
DROP TABLE IF EXISTS ServiceProviders;
DROP TABLE IF EXISTS UserRequirements;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(20),
    Address VARCHAR(100)
);

CREATE TABLE ServiceProviders (
    ServProviderID INT PRIMARY KEY AUTO_INCREMENT,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(20),
    Wages VARCHAR(50),
    Address VARCHAR(100)
);

CREATE TABLE UserRequirements (
    UserID INT,
    Skills VARCHAR(100),
    Wages VARCHAR(50),
    Address VARCHAR(100),
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Feedback (
    SID INT,
    Ratings DOUBLE
);

CREATE TABLE BookingList (
    UserID INT,
    SID INT,
    SNameFirst VARCHAR(50),
    SNameLast VARCHAR(50),
    PhoneNumber INT,
    Wages VARCHAR(50),
    Ratings INT,
    FOREIGN KEY (SID) REFERENCES ServiceProviders(ServProviderID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
