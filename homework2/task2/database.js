import db from "./db.js";

export default async function creating() {
	await db.connect()
		.then(() => db.query(
			`
		CREATE TABLE film
			(
				film_id int PRIMARY KEY,
				film_name text NOT NULL,
				film_year int NOT NULL
			);

		INSERT INTO film
		VALUES
		(1, '1+1', 2009),
		(2, 'OLD BOY', 2012),
		(3, 'Examen', 2014),
		(4, 'War and Peace', 2016),
		(5, 'Good Bye', 2001);

			CREATE TABLE genre
		(
			genre_id int PRIMARY KEY,
			genre_name VARCHAR(128)
		);


		INSERT INTO genre
		VALUES
			(1, 'arcade'),
			(2, 'drama'),
			(3, 'comedy'),
			(4, 'melodrama');

		CREATE TABLE film_genre
			(
				film_id int REFERENCES film(film_id)
				ON UPDATE CASCADE ON DELETE CASCADE,
				genre_id int REFERENCES genre(genre_id)
				ON UPDATE CASCADE ON DELETE CASCADE
			);

		INSERT INTO film_genre
		VALUES
			(1, 1),
			(1, 3),
			(1, 4),
			(2, 1),
			(2, 2),
			(3, 1),
			(3, 4),
			(3, 3),
			(4, 2),
			(4, 1),
			(5, 4),
			(5, 2)
		`
		)).then(() => {
			console.log("created tables");
		}).catch((err) => console.log("tables allready exist"));
}
