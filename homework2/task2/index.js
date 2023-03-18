import http from "http";
import db from "./db.js";
import Crud from "./crud.js";
import creating from "./database.js";
await creating();
const server = http.createServer(async (req, res) => {
    let id = req.headers.id;
    let methods = new Crud();
    res.writeHead(200, { 'Content-Type': 'text/json' });
    if (req.method == "POST") {
        if (req.url == "/films") {
            req.on("data", async (chunk) => {
                chunk = JSON.parse(chunk.toString());
                await methods.postFilm(db, chunk, (message) => {
                    res.end(message)
                });
            })
        } else if (req.url == "/genres") {
            req.on("data", async (chunk) => {
                chunk = JSON.parse(chunk.toString());
                await methods.postGenre(db, chunk, (message) => {
                    res.end(message)
                });
            })
        }
    } else if (req.method == "PUT") {
        if (req.url == "/films/" + id) {
            req.on("data", async (chunk) => {
                chunk = JSON.parse(chunk.toString());
                await methods.updateFilm(db, chunk, (message) => {
                    res.end(message)
                });
            })
        } else if (req.url == "/genres/" + id) {
            req.on("data", async (chunk) => {
                chunk = JSON.parse(chunk.toString());
                await methods.updateGenre(db, chunk, (message) => {
                    res.end(message)
                });
            })
        }
    } else if (req.method == "DELETE") {
        if (req.url == "/films/" + id) {
            await methods.deleteFilm(db, id, (message) => {
                res.end(message)
            })
        } else if (req.url == "/genres/" + id) {
            await methods.deleteGenre(db, id, (message) => {
                res.end(message)
            })
        }
    } else if (req.method == "GET") {
        if (id && req.url == "/films/" + id) {
            res.end(await methods.getFilm(db, id));
        } else if (id && req.url == "/genres/" + id) {
            res.end(await methods.getGenre(db, id));
        } else if (req.url == "/films") {
            res.end(await methods.getFilms(db));
        } else if (req.url == "/genres") {
            res.end(await methods.getGenres(db));
        }
    }
})
server.listen(3002);