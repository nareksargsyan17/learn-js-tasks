export default class Methods {
    async getFilms(db) {
        return await db.connect()
            .then(() => db.query('SELECT * FROM film'))
            .then(data => JSON.stringify(data.rows))
    };
    async getGenres(db) {
        return await db.connect()
            .then(() => db.query('SELECT * FROM genre'))
            .then(data => JSON.stringify(data.rows))
    }
    async getFilm(db, id) {
        return await db.connect()
            .then(() => db.query(`SELECT * FROM film WHERE film_id = ${id}`))
            .then(data => JSON.stringify(data.rows))
    }
    async getGenre(db, id) {
        return await db.connect()
            .then(() => db.query(`SELECT * FROM genre WHERE genre_id = ${id}`))
            .then(data => JSON.stringify(data.rows))
    }
    async postFilm(db, data, callBack) {
        await db.connect()
            .then(() => {
                return db.query(`
            INSERT INTO film 
            VALUES($1,$2,$3)
            `, [data.film_id, data.film_name, data.film_year]);
            })
            .then(() =>
                data.genres.forEach(item => {
                    db.query(`
                INSERT INTO film_genre 
                VALUES($1,$2)
                `, [data.film_id, item]);
                })
            )
            .then(() => {
                callBack("created film")
            }).catch((err) => {
                callBack(err.toString())
            })
    };
    async postGenre(db, data, callBack) {
        await db.connect()
            .then(() => {
                return db.query(`
            INSERT INTO genre 
            VALUES($1,$2)
            `, [data.genre_id, data.genre_name])
            })
            .then(() => {
                callBack("created genre")
            }).catch((err) => {
                callBack(err.toString())
            })
    };
    async updateFilm(db, data, callBack) {
        await db.connect()
            .then(() => {
                let result = ""
                Object.keys(data).forEach((elem, index) => {
                    if (elem == "genres") {
                        db.query(`
                            DELETE FROM film_genre
                            WHERE film_id = ${data.film_id}
                            `)
                        data.genres.forEach(async item => {
                            db.query(
                                `INSERT INTO film_genre
                                        VALUES($1,$2)
                                    `, [data.film_id, item]
                            )
                        })
                    } else {
                        result += `${elem} = $${index + 1},`
                    }
                    return result
                })
            }).then((result) => {
                result = result.slice(0, result.length - 1);
                db.query(`
                        UPDATE film
                        SET 
                        ${result}
                        WHERE film_id = ${data.film_id}
                        `, [...Object.values(data)]
                )
            })
            .then(() => {
                callBack("updated film")
            }).catch((err) => {
                callBack(err.toString())
            })
    };
    async updateGenre(db, data, callBack) {
        await db.connect()
            .then(() => {
                let result = ""
                Object.keys(data).forEach((elem, index) => {
                    result += `${elem} = $${index + 1},`
                })
                result = result.slice(0, result.length - 1);
                db.query(`
                    UPDATE genre
                    SET 
                    ${result}
                    WHERE genre_id = ${data.genre_id}
                    `, [...Object.values(data)]
                )
            })
            .then(() => {
                callBack("updated genre")
            }).catch((err) => {
                callBack(err.toString())
            })
    };
    async deleteFilm(db, id, callBack) {
        return await db.connect()
            .then(() => db.query(`DELETE FROM film WHERE film_id = ${id}`))
            .then(() => {
                callBack("deleted film")
            }).catch((err) => {
                callBack(err.toString())
            })
    };
    async deleteGenre(db, id, callBack) {
        return await db.connect()
            .then(() => db.query(`DELETE FROM genre WHERE genre_id = ${id}`))
            .then(() => {
                callBack("deleted genre")
            }).catch((err) => {
                callBack(err.toString())
            })
    };

}
