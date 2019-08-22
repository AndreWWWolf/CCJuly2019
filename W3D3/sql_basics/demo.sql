-- SQL: Basics

-- To connect to a database through terminal we use the command
-- psql -d database_name

-- To execute this file, do:
-- psql -d <database-name> < demo.sql

/*

 <-- multiline comment

*/

-- Create Table

-- SQL Conventions:
-- When ever you're using SQL keywords they should be in all caps
-- Keywords: (CREATE TABLE, SELECT, INNER JOIN)

CREATE TABLE cars (
  -- define a column id with the type of BIGSERIAL
  -- SERIAL will auto increment new records
  id BIGSERIAL,
  -- VARCHAR is a string type where characters are limited to the argument
  brand VARCHAR(50),
  model VARCHAR(50),
  -- INTEGER is a number type that can not have decimals, but can be negative
  doors INTEGER,
  -- TEXT is a string type with no max character count
  description TEXT
);

-- ALL SQL Statments must end in a semicolon (;)

-- CRUD

-- CREATE

INSERT INTO students
  ("first_name", last_name, "email", "phone_number")
  VALUES
  ('brandon', 'lam', 'brandon@brandonlam.ca', '77872750492') ;

-- We can add multiple records in the same transaction by seperating the sets of values by commas
INSERT INTO cars
  (brand, model, doors, description)
  VALUES
  ('bmw', 'i8', 2, 'too fancy'),
  ('ford', 'mustang', 2, 'too fast'),
  ('tesla', 'Model X', 4, 'just right');

-- READ
-- READs all columns from all students
-- * means everything
SELECT * FROM students;

-- We can specify the columns that we want seperated by commas
SELECT first_name, last_name FROM students;

-- WHERE
-- We can use the WHERE clause to filter results depending on a argument

-- SELECTS the first_name and last_name of the student with id of 1
SELECT first_name, last_name FROM students WHERE id = 1;

-- SELECT first_name and age from students where their age is greater than 20;
SELECT first_name, age FROM students WHERE age > 20;

-- GET all the students whos registration_date is within the last year

-- https://www.postgresql.org/docs/9.1/functions-formatting.html
-- https://www.postgresql.org/docs/9.1/datatype-datetime.html
-- https://www.postgresql.org/docs/9.1/functions-datetime.html

SELECT id, first_name, registration_date FROM students WHERE registration_date > NOW() - INTERVAL '600' DAY;

-- AND / OR

-- GET get all the students whos ids are greater than 100 but less than 200
SELECT last_name, first_name, id FROM students WHERE id > 100 AND id < 200;

-- GET get all the students whos ids are greater than 100 but less than 200, OR their id is 1
SELECT last_name, first_name, id FROM students WHERE id > 100 AND id < 200 OR id = 1;

-- NULL & NOT NULL

-- GET records in database where student's age is not present/ not existing
SELECT id, first_name, age FROM students WHERE age IS NOT NULL;
SELECT id, first_name, age FROM students WHERE age IS NULL;

-- LIKE & ILIKE
-- GET students where first_name begins with Jo
-- ILIKE is not case sensitive, LIKE is
SELECT id, first_name FROM students WHERE first_name ILIKE 'Jo%';

-- BETWEEN

-- GET all the students who are between 20 and 30 years old;

SELECT id, first_name, age FROM students WHERE age BETWEEN 20 AND 30;

-- ORDERING
-- LIMITING
-- OFFSET

-- Use ORDER BY to organize the results based off an argument
-- GET all students whos ids are between 20 and 30 ORDERED by registration_date;
SELECT 
  id, first_name, age, registration_date 
  FROM students 
  WHERE age 
  BETWEEN 20 AND 30 
  ORDER BY registration_date DESC;

SELECT 
  id, first_name, age, registration_date 
  FROM students 
  WHERE age 
  BETWEEN 20 AND 30 
  ORDER BY registration_date ASC;

-- use LIMIT to return only a set amount of records
-- GET first 10 students whos ids are between 20 and 30 ORDERED by registration_date ASC;
SELECT 
  id, first_name, age, registration_date 
  FROM students 
  WHERE age 
  BETWEEN 20 AND 30 
  ORDER BY registration_date ASC
  LIMIT 10;

-- use OFFSET to return the second set of a limited amount
SELECT 
  id, first_name, age, registration_date 
  FROM students 
  WHERE age 
  BETWEEN 20 AND 30 
  ORDER BY registration_date ASC
  LIMIT 10
  OFFSET 10; -- Skips first 10 records begins at the 11th record


-- AGGREGATE FUNCTIONS
-- Count returns the number of records in the result
SELECT count(*) FROM students;
-- Round, Avg
-- Average age of all the students rounded to the nearest number
SELECT ROUND(AVG(age)) FROM students;
-- SUM
-- MIN
-- MAX

-- AS allows us to create aliases for certain results
-- GROUP BY 
SELECT count(*) AS occurences, last_name FROM students 
  GROUP BY last_name 
  ORDER BY occurences;

-- UPDATE
-- use UPDATE to modify a record;
-- ALWAYS PROVIDE A WHERE CLAUSE

-- Will update the email of student with id 1 to 'Something Else'
UPDATE students
  SET email = 'Something ELE ELSE'
  WHERE id = 1
  RETURNING first_name; -- Displays the records that were changed from the query


-- DELETE

-- use DELETE to remove a record from a table;
-- AWAYS PROVIDE A WHERE clause or else everything will get deleted.

DELETE FROM students
  WHERE id = 501
  RETURNING *;