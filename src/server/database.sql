CREATE TABLE cards (
    title VARCHAR(255),
    text TEXT,
    data DATE,
    id SERIAL PRIMARY KEY
);

ALTER TABLE cards ADD COLUMN img VARCHAR(255);
