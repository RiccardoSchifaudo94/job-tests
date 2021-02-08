/* STACK MySQL Database 5.6 */
/*  TEST 5 - CREATE TABLE STATEMENTS of products, categories and joiner table */
CREATE TABLE products (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
price VARCHAR(30) NOT NULL,
creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name TEXT NOT NULL,
flag VARCHAR(30) NOT NULL
);

CREATE TABLE assoc_products_categories (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
id_product INT(10) NOT NULL,
id_category INT(10) NOT NULL
);
/* populate table products */
INSERT INTO products(name,price) VALUES ('ham','12.40');
INSERT INTO products(name,price) VALUES ('apple','2.30');
INSERT INTO products(name,price) VALUES ('onion','1.35');
INSERT INTO products(name,price) VALUES ('pasta','4.32');
INSERT INTO products(name,price) VALUES ('rice','7.21');
INSERT INTO products(name,price) VALUES ('pop corn','1.40');
INSERT INTO products(name,price) VALUES ('coca cola','3.20');
INSERT INTO products(name,price) VALUES ('water','1.00');
INSERT INTO products(name,price) VALUES ('ananas','4.50');
INSERT INTO products(name,price) VALUES ('bananas','12.40');
INSERT INTO products(name,price) VALUES ('salad','2.70');
INSERT INTO products(name,price) VALUES ('orange','0.40');
INSERT INTO products(name,price) VALUES ('mango','1.70');
INSERT INTO products(name,price) VALUES ('chicken','5.60');
INSERT INTO products(name,price) VALUES ('apple pie','8.90');
INSERT INTO products(name,price) VALUES ('chocolate','6.20');
INSERT INTO products(name,price) VALUES ('beef','3.80');
INSERT INTO products(name,price) VALUES ('hamburger','7.30');
INSERT INTO products(name,price) VALUES ('kiwi','2.30');
INSERT INTO products(name,price) VALUES ('preakly pear','15.32');
INSERT INTO products(name,price) VALUES ('fruit salad','9.95');
INSERT INTO products(name,price) VALUES ('khus khus','23.98');
INSERT INTO products(name,price) VALUES ('shushi','25.99');
INSERT INTO products(name,price) VALUES ('fish & chips','9.99');

/* populate table categories */
INSERT INTO categories(name,flag) VALUES('meat','public');
INSERT INTO categories(name,flag) VALUES('white meat','public');
INSERT INTO categories(name,flag) VALUES('red meat','private');
INSERT INTO categories(name,flag) VALUES('vegetables','public');
INSERT INTO categories(name,flag) VALUES('pasta','public');
INSERT INTO categories(name,flag) VALUES('beverage','private');
INSERT INTO categories(name,flag) VALUES('sweet beverage','public');
INSERT INTO categories(name,flag) VALUES('snack','public');
INSERT INTO categories(name,flag) VALUES('pre-cooked food','private');
INSERT INTO categories(name,flag) VALUES('natural food','public');
INSERT INTO categories(name,flag) VALUES('pasta','public');
INSERT INTO categories(name,flag) VALUES('discounted price','public');
INSERT INTO categories(name,flag) VALUES('new product','public');
INSERT INTO categories(name,flag) VALUES('limited version','private');
INSERT INTO categories(name,flag) VALUES('exotic fruit','public');
INSERT INTO categories(name,flag) VALUES('no catergory','public');
INSERT INTO categories(name,flag) VALUES('fruit','public');
INSERT INTO categories(name,flag) VALUES('mixed fruit','public');
INSERT INTO categories(name,flag) VALUES('fish','public');

/* assoc products to severals categories */
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,10);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,12);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,13);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,14);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,15);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (9,17);

INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,10);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,12);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,13);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,14);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,15);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (21,17);

INSERT INTO assoc_products_categories(id_product,id_category) VALUES (14,1);
INSERT INTO assoc_products_categories(id_product,id_category) VALUES (14,2);


/* FETCH ALL items products and categories */ 
SELECT * FROM products;
SELECT * FROM categories;

/*  FETCH ONLY PRODUCTS WITH AT LEAST ASSOCIED TO 5 CATEGORIES with PUBLIC FLAG */

SELECT
products.name as name, 
products.price as price,
COUNT(assoc_products_categories.id) as number_of_categories
FROM products 
INNER JOIN assoc_products_categories 
ON products.id = assoc_products_categories.id_product 
INNER JOIN categories 
ON categories.id = assoc_products_categories.id_category 
WHERE categories.flag='public' 
GROUP BY products.id 
HAVING number_of_categories >= 5; 