DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL UNIQUE,
    stock_level INTEGER NOT NULL,
    delivery_time TEXT NOT NULL
);

INSERT INTO products (product_id, stock_level, delivery_time) 
VALUES ('9646851195225', 10, '3-5 business days');

INSERT INTO products (product_id, stock_level, delivery_time) 
VALUES ('9646851653977', 5, '1-2 business days');


SELECT * FROM products;