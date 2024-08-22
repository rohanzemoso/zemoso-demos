-- Initial table
CREATE TABLE StudentCourse (
    StudentID INT,
    CourseID VARCHAR(10),
    Instructor VARCHAR(50),
    Department VARCHAR(50)
);

INSERT INTO StudentCourse (StudentID, CourseID, Instructor, Department)
VALUES 
(1, 'CSE101', 'Dr. Smith', 'CS'),
(2, 'CSE102', 'Dr. Brown', 'CS'),
(3, 'MAT101', 'Dr. Lee', 'Math');

-- Normalizing to BCNF

-- Dropping earlier table to do normalisation

DROP TABLE IF EXISTS StudentCourses;


CREATE TABLE StudentCourses (
    StudentID INT,
    CourseID VARCHAR(10),
    PRIMARY KEY (StudentID, CourseID)
);

CREATE TABLE Courses (
    CourseID VARCHAR(10),
    Instructor VARCHAR(50),
    Department VARCHAR(50),
    PRIMARY KEY (CourseID)
);

INSERT INTO StudentCourses (StudentID, CourseID)
VALUES 
(1, 'CSE101'),
(2, 'CSE102'),
(3, 'MAT101');

INSERT INTO Courses (CourseID, Instructor, Department)
VALUES 
('CSE101', 'Dr. Smith', 'CS'),
('CSE102', 'Dr. Brown', 'CS'),
('MAT101', 'Dr. Lee', 'Math');
