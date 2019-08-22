-- CRUD OPERATIONS

-- CREATING ROWS (OR INSERTING ROWS)
-- https://www.postgresql.org/docs/9.5/sql-insert.html

-- 

SELECT first_name, last_name FROM students
WHERE registration_date > current_date - interval '440 days'

-- INSERT INTO "students"
--   ("first_name", "last_name", "email", "phone_number")
--   VALUES
--   ('Tam', 'Kbeilli', 'tam@codecore.ca', '778.899.9988');

-- INSERT INTO "students"
--   ("first_name", "last_name", "email", "phone_number")
--   VALUES
--   ('Bam', 'Kbeilli', 'tam@codecore.ca', '778.899.9988'),
--   ('Sam', 'Kbeilli', 'tam@codecore.ca', '778.899.9988'),
--   ('Dan', 'Kbeilli', 'tam@codecore.ca', '778.899.9988');

-- READING DATA

-- This will get all rows from the students table
-- to display all columns
-- SELECT * FROM students;

-- This will get rows from the students table displaying
-- only the specified columns: id, first_name and last_name
-- SELECT id, first_name, last_name FROM students;

-- Use a WHERE clause to filter the rows from a query

-- The following will only retrieve rows where their
-- "id" is equal to 100 (which will be one)
-- SELECT id, first_name FROM students WHERE id = 100;

-- Exercise: Select all students whose ids are greater than 100


-- Exercise: Select all students that have registered in the
-- last 360 days

-- https://www.postgresql.org/docs/9.1/functions-formatting.html
-- https://www.postgresql.org/docs/9.1/datatype-datetime.html
-- https://www.postgresql.org/docs/9.1/functions-datetime.html

-- Exercise: Select all students whose ages are more than 40

-- Exercise: Select all students who have registered in the last 400 days

-- Exercise: Select all students whose ids are more than 100 and less than 200

-- Exercise: Select all students whose ages are more than 40 or less than 20

-- Exercise: Select all students whose ages are null or less than 20

-- Exercise: Select all students whose first names start with Jo (case sensitive)

-- Exercise: Select all students whose last names contain 'nn' (case insensitive)

-- Exercise: Select all students who have registered between 400 an 440 days ago

-- ORDERING RESULTS
-- LIMITING RESULTS
-- OFFSET RESULTS

-- AGGREGATE FUNCTIONS
-- Use these to do calculations on groups of data.
-- For a full list of functions, checkout:
-- https://www.postgresql.org/docs/10/static/functions-aggregate.html


-- Often, we want to perform aggregations on only
-- groups of our data instead of an entire table.
-- Use GROUP BY to do this.


-- UPDATE A ROW

-- Always provide a WHERE when using UPDATE
-- otherwise it will change every row in your table


-- DELETE

-- Always provide a WHERE when using UPDATE
-- otherwise it will change every row in your table
