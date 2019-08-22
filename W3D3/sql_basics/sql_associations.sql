-- DROP TABLE
-- \c jasonau
-- DROP DATABASE sql_lab
-- \i sql_lab.sql

-- FIND PROJECTS with student id of 2
SELECT * 
FROM projects 
WHERE student_id = 2
;

-- Get scores from enrolments with id of 1
SELECT score 
FROM enrolments 
WHERE id = 1
;

-- INNER JOIN
-- JOIN two associated tables ON a common column, only show
-- the rows that are actually associated

-- CROSS JOIN
-- LEFT JOIN/RIGHT JOIN
-- OUTER JOIN

-- Select All the students that have projects, show the project name, order by project name
SELECT first_name, last_name, title 
FROM students
INNER JOIN projects 
ON students.id = projects.student_id
ORDER BY title
;

-- Select title, names of students enrolled in courses containing
-- the word 'hybrid matrix'
SELECT title, first_name, last_name 
FROM courses
INNER JOIN enrolments 
ON courses.id = enrolments.course_id
INNER JOIN students 
ON enrolments.student_id = students.id
WHERE title ILIKE '%hybrid matrix%'
;

-- Select all students and their projects, include students
-- without projects
SELECT * 
FROM students
LEFT JOIN projects 
ON students.id = projects.student_id
;

-- List average score for each course
-- with higher averages on top
-- displaying the course title and score average

SELECT courses.title, AVG(score) 
FROM enrolments
INNER JOIN courses ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY AVG(score) DESC
;

-- Select courses of the last registered student
SELECT first_name, last_name, title, registration_date FROM students
INNER JOIN enrolments ON enrolments.student_id = students.id
INNER JOIN courses on enrolments.course_id = courses.id
WHERE registration_date = (
    SELECT MAX(registration_date) FROM students
);

-- List all courses with at least 5 enrolled students
-- Show course title and number of students
-- Order by number of students
SELECT title, num_students FROM courses
INNER JOIN (SELECT course_id, COUNT(*) AS num_students
    FROM enrolments
    GROUP BY course_id
    HAVING COUNT(*) >= 5
    ORDER BY COUNT(*) ASC) AS coursesWithMoreThanFiveStudents
ON courses.id = coursesWithMoreThanFiveStudents.course_id;

--ALTERNATE VERSION
SELECT course_title, number_of_students
FROM (
	SELECT courses.id, courses.title AS course_title, COUNT(enrolments.id) AS number_of_students
	FROM courses
	INNER JOIN enrolments ON courses.id = enrolments.course_id
	GROUP BY courses.id
) AS courses_with_enrolments
WHERE number_of_students >= 5;

--Calculate the average score of all classes.
--Show only classes with an average score lower than 60.
--Display course name, course id, average score, and enrolment count.
SELECT course_name, average_score, enrolment_count
FROM (
  SELECT courses.title AS course_name, 
         ROUND(AVG(enrolments.score)) AS average_score,
         COUNT(enrolments.id) AS enrolment_count
  FROM enrolments
  INNER JOIN courses ON courses.id = enrolments.course_id
  GROUP BY courses.id
) AS average
WHERE average_score < 60
ORDER BY average_score DESC;