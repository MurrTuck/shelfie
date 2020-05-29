CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(80),
    price INTEGER,
    image_url TEXT
);


-- Inserting Dummy Data
-- INSERT INTO products (
--  name,
--  description,
--  price,
--  image_url
-- )VALUES (
--  'Dummy Product #3',
--  'Dummy Description #3',
--  25,
--  'dummyImage3'
-- );