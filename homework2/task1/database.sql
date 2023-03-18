CREATE TABLE film
(
	film_id int PRIMARY KEY,
	film_name text NOT NULL,
	film_year int NOT NULL,
	film_country text NOT NULL,
	film_rating real NOT NULL,
	film_budget int NOT NULL
)


INSERT INTO film
VALUES
(1, 'The 400 Blows', 1959, 'USA', 7.1, 25000),
(2, 'La haine', 1990, 'UK', 8.1, 29000),
(3, 'The Godfather', 1972, 'GE', 9.1, 40000)


//creating person
CREATE TABLE person
(
	person_id int PRIMARY KEY,
	person_name text NOT NULL,
	person_role text NOT NULL,
	film_id int REFERENCES film(film_id)
)


//inserting values

INSERT INTO person
VALUES
(1, 'Yosef Smith', 'director', 1),
(2, 'Joselyn Cox', 'producer', 1),
(3, 'Colby Hurst', 'scenarist', 1),
(4, 'Ellen Pope', 'operator', 1),
(5, 'Gerald Cook', 'composer', 1),
(6, 'Kylan Downs', 'artist', 1),
(7, 'Carlie Simmons', 'montage', 1)




CREATE TABLE film_person
(
	film_person_id int PRIMARY KEY,
	film_person_name text NOT NULL
)

INSERT INTO film_person
VALUES
(1, 'Yosef Cox'),
(2, 'Joselyn Smith'),
(3, 'Colby Hurst'),
(4, 'Ellen Pope'),
(5, 'Gerald Cook'),
(6, 'Kylan Downs'),
(7, 'Carlie Simmons')


/*persone_role -- true(main role) || false(dublicate role)*/
CREATE TABLE film_person_role
(
	film_id int REFERENCES film(film_id),
	film_person_id int REFERENCES film_person(film_person_id),
	person_role bool
)

INSERT INTO film_person_role
VALUES 
(1,1,true),
(1,2,true),
(1,3, false),
(1,4, false),
(1,5, false),
(2, 1, false),
(2,2, true),
(2,5, false),
(3, 7, true),
(3,6, false),
(3,1, false)

CREATE TABLE genre
(
	genre_id int PRIMARY KEY,
	genre_name VARCHAR(64) NOT NULL
)

INSERT INTO genre
VALUES
(1, 'action'),
(2, 'adventure'),
(3, 'comedy'),
(4, 'drama')


CREATE TABLE film_genre
(
	film_id int REFERENCES film(film_id),
	genre_id int REFERENCES genre(genre_id)
)

INSERT INTO film_genre
VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 4),
(3, 1)


/*selecting genres where film_id = 2*/
SELECT *
FROM genre
WHERE genre_id IN
(
	SELECT genre_id
	FROM film_genre
	WHERE film_id = 2
)


SELECT *
FROM film 
INNER JOIN film_person_main 
ON film_person_main.film_id = 1
INNER JOIN film_person 
ON film_person.film_person_id = film_person_main.film_person_id

CREATE TABLE audience
(
	audience_id int PRIMARY KEY,
	audience_country VARCHAR(32) NOT NULL
)



INSERT INTO audience
VALUES
(1, 'USA'),
(2, 'UK'),
(3, 'ARM'),
(4, 'GE'),
(5, 'RU')


CREATE TABLE film_audience
(
	film_id int REFERENCES film(film_id),
	audience_id int REFERENCES audience(audience_id),
	audience_count int
)


INSERT INTO film_audience
VALUES
(1, 1, 25000),
(1, 3, 50000),
(1, 4, 15000),
(1, 2, 40000),
(2, 1, 15000),
(3, 3, 10000)