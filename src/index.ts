import { MongoDB } from "./ports/mongodb/MongoDB";

(async function () {
    let mongoDB = new MongoDB('mongodb://admin:admin@localhost:27017/', 'ddd');
    let conn = await mongoDB.connect();
    let myCollection = await conn.createCollection('myAsyncCollection2');

    console.log(myCollection);

    await conn.close();
})();
