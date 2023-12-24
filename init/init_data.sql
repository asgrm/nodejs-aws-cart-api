INSERT INTO product (id, description, price, title) VALUES
('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 'Fun Stacking Blocks', 12, 'Stacking Blocks Set'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 'Interactive Robot Friend', 25, 'RoboBuddy');

INSERT INTO cart(id, user_id, status) VALUES ('f45a8638-7c94-45b4-87d5-40fee1bd2f11', 'test_user_1', 'OPEN');

INSERT INTO cart_item(id, count, product_id, cart_id) VALUES ('6e587908-cd1b-410e-8ca1-bdce6b68f181',6, '7567ec4b-b10c-48c5-9345-fc73c48a80aa', 'f45a8638-7c94-45b4-87d5-40fee1bd2f11');