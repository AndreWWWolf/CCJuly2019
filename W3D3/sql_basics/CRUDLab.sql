-- STEP 1: to create a new record in db
INSERT INTO students
("first_name", "last_name", "Age", "email", "registration_date", "phone_number")
VALUES
('John', 'Smith', '45', 'john@smith.com', '01/01/2016', '778.778.7787')
;

--STEP 2: TO fetch most recently added record:
SELECT * FROM students ORDER BY id DESC LIMIT 1;

--STEP 3: To Update age of most recent record:
UPDATE students set age = '50' WHERE id = 502 RETURNING first_name, id, age;

--STEP 4: Delete that record using its id:
DELETE FROM students
  WHERE id = 502
  RETURNING *;

--SELECTING LAB

--STEP 1: Select the first 10 students whose ages are between 35 and 45.
SELECT *
  FROM students 
  WHERE age 
  BETWEEN 35 AND 45 
  ORDER BY id ASC
  LIMIT 10
  ;

--STEP 2: Select the third set of 10 students whose ages are more than 25 
--and whose first names contain `le`. 
--The students must be ordered by their id in ascending order 
--then first name in a descending order.

SELECT *
  FROM students 
  WHERE age > 25 AND first_name ILIKE '%le%'  
  ORDER BY id ASC, first_name DESC
  LIMIT 10
  OFFSET 20;

--STEP 3: Select the 10 oldest students 
--(You should ignore students with an age that is `NULL`).
SELECT * 
FROM students 
WHERE age < price 
ORDER BY age DESC 
LIMIT 10;

--STEP 4: Select all students with age 45 whose last names contain the letter n.
SELECT *
  FROM students 
  WHERE age = 45 AND last_name ILIKE '%n%'  
  ORDER BY id DESC
  ;

--PRODUCTS

--STEP 1: Select all the products that are on sale.
SELECT name, sale_price, price
FROM products
WHERE sale_price < price
ORDER BY sale_price DESC
;

--STEP 2: Select all the products that are on sale 
--and have remaining items in stock 
--ordered by the sale price in ascending order.
SELECT name, sale_price, price products.remaining_quantity
FROM products
WHERE sale_price < price AND products.remaining_quantity > 0
ORDER BY sale_price ASC
;

--STEP 3:Select all the products priced between 25 and 50 (regular price) 
--and that are on sale.
SELECT name, price, sale_price
FROM products
WHERE price > 25 AND price < 50 AND sale_price < price
ORDER BY price DESC
;

--QUERIES LAB

--STEP 1: Select the product whose stock has the most value (use sale price)
SELECT name, sale_price * products.remaining_quantity AS total_value
FROM products
ORDER BY total_value DESC
LIMIT 1;

--STEP 2: Select the most expensive product whose price is between 25 and 50 with remaining quantity
SELECT name, price
FROM products
WHERE price > 25 AND price < 50 AND products.remaining_quantity > 0
ORDER BY price DESC
LIMIT 1
;

--STEP 3: Select all products on sale with remaining quantity ordered by their price and then their name
SELECT name, sale_price, products.remaining_quantity
FROM products
WHERE sale_price < price AND products.remaining_quantity > 0
ORDER BY sale_price DESC, name DESC
;

--STEP 4: Select the second set 20 results based on the previous query
SELECT name, sale_price, products.remaining_quantity
FROM products
WHERE sale_price < price AND products.remaining_quantity > 0
ORDER BY sale_price DESC, name DESC
LIMIT 20
OFFSET 20
;

--STEP 5: Find the average price of all products
SELECT ROUND(AVG(price)) 
FROM products;

--STEP 6: Find the average sale_price of all products that are on sale
SELECT ROUND(AVG(sale_price)) 
FROM products
WHERE sale_price > 0
;

--STEP 7: Find the average price of all products that are on sale with remaining quantity
SELECT ROUND(AVG(price)) 
FROM products
WHERE sale_price > 0 AND products.remaining_quantity > 0
;

--STEP 8: Update all the products whose name contains `paper` (case insensitive) 
--to have a remaining quantity of 0
UPDATE products
  SET remaining_quantity = 0
  WHERE name ILIKE '%paper%'
  RETURNING name, remaining_quantity
  ;

--STEP 9:Update all the products whose name contains `paper` or `steel` 
--to have a remaining quantity of a random number between 5 and 25
UPDATE products
SET remaining_quantity = CAST(random()*(25-5)+5 AS INT)
WHERE name ILIKE '%paper%' OR name ILIKE '%steel%'
RETURNING name, remaining_quantity
;

--STEP 10: Select the second set of 10 cheapest products 
--(by `price` or `sale_price`) with remaining quantity
SELECT name, price, sale_price
FROM products
WHERE products.remaining_quantity > 0
ORDER BY price DESC
LIMIT 10
OFFSET 10
;

--AGGREGATE FUNCTIONS

--STEP 1: Find the number of students named 'Elinore'.
SELECT id, first_name, last_name
FROM students
WHERE first_name = 'Elinore'
;

--STEP 2: List the `first_name`s that occur more than once in students, 
--with the number occurrences of that name.
SELECT count(*) AS occurences, first_name 
FROM students
GROUP BY first_name HAVING count(*) > 1
ORDER BY occurences DESC
;

--STEP 3: Refine the above query to list the 20 most common first_names among students,
-- in order first of how common they are, 
--and alphabetically when names have the same count.

SELECT count(*) AS occurences, first_name 
FROM students
GROUP BY first_name HAVING count(*) > 1
ORDER BY occurences DESC, first_name ASC
LIMIT 20
;

--PRODUCTS
-- From the products table:

-- Find the most expensive product.

SELECT * FROM products
WHERE price =
(SELECT MAX(price)
FROM products);


-- Find the cheapest product that is on sale.

SELECT *
FROM products
WHERE price >sale_price
   AND sale_price = (SELECT MIN(sale_price)
   FROM products);


-- Find the total value of all inventory in stock (use sale price).

SELECT SUM(sale_price)
FROM products;

