import Pool from "pg";
const db = new Pool.Pool({
    user: 'postgres',
    database: 'mydb',
    password: '170801nsrm',
    port: 3008,
    host: 'localhost',
})
export default db;

