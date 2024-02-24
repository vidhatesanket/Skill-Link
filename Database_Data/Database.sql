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
    ServiceProviderID INT PRIMARY KEY AUTO_INCREMENT,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(20),
	Skills Varchar(30),
    Wages VARCHAR(50),
    Address VARCHAR(100)
);

CREATE TABLE UserRequirements (
	RequirementID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Skills VARCHAR(100),
    Wages VARCHAR(50),
    Address VARCHAR(100),
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Feedback (
	Username VARCHAR(50),
    ServiceProviderUsername VARCHAR(50) NOT NULL,
    FeedbackMessage TEXT NOT NULL,
    Rating INT NOT NULL,
	FOREIGN KEY (ServiceProviderUsername) REFERENCES ServiceProviders(Username)
);


CREATE TABLE BookingList (
	RequirementID INT,
    UserID INT,
   -- ServiceProviderID INT,--
	Username VARCHAR(50) NOT NULL,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    PhoneNumber VARCHAR(10),
	Skills VARCHAR(50),
    Wages VARCHAR(50),
    -- FOREIGN KEY (ServiceProviderID) REFERENCES ServiceProviders(ServiceProviderID),--
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
	FOREIGN KEY (Username) REFERENCES ServiceProviders(Username)
);

CREATE TABLE Status (
    -- UserID INT,
	RequirementID INT,
	ServiceProviderUserName VARCHAR(50) NOT NULL UNIQUE,
	IsSelected BOOLEAN,
	FOREIGN KEY (ServiceProviderUsername) REFERENCES ServiceProviders(Username)
);




-- Inserting data into Users table with corrected phone numbers
INSERT INTO Users (NameFirst, NameLast, Username, Password, PhoneNumber, Address) 
VALUES 
('John', 'Doe', 'john_doe', 'password123', '1234567890', '123 Main St'),
('Jane', 'Smith', 'jane_smith', 'password456', '9876543210', '456 Elm St');


-- Inserting data into ServiceProviders table
INSERT INTO ServiceProviders (NameFirst, NameLast, Username, Password, PhoneNumber,Skills, Wages, Address) 
VALUES 
('Alice', 'Johnson', 'alice_johnson', 'providerpass', '5551234567','Cleaning', '15/hr', '789 Oak St'),
('Bob', 'Brown', 'bob_brown', 'providerpass123', '5559876543', 'Gardening','20/hr', '321 Pine St');

-- Inserting data into UserRequirements table
INSERT INTO UserRequirements (UserID, Skills, Wages, Address, Date) 
VALUES 
(1, 'Cleaning', '15/hr', '123 Main St', '2024-02-12'),
(2, 'Gardening', '20/hr', '456 Elm St', '2024-02-15');



-- Inserting data into Status table
INSERT INTO Status(RequirementID,ServiceProviderUserName, IsSelected) 
VALUES 
(1,"alice_johnson",1),
(2,"bob_brown",1);

-- Inserting data into BookingList table
INSERT INTO BookingList (UserID, Username,NameFirst, NameLast, PhoneNumber,Skills, Wages) 
VALUES 
(1,'alice_johnson', 'Alice', 'Johnson', '5551234567','coder', '15/hr'),
(2,'bob_brown' ,'Bob', 'Brown', '5559876543','web developer', '20/hr');


-- Insert some dummy values into the Feedback table
INSERT INTO Feedback (Username,ServiceProviderUsername, FeedbackMessage, Rating)
VALUES 
('john_doe','alice_johnson', 'Excellent service!', 5),
('jane_smith','bob_brown', 'Good job overall.', 4);
