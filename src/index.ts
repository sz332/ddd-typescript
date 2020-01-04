import { MongoDB } from "./ports/mongodb/MongoDB";
import { JSObjectMedia } from "./core/Media";

let jsObjMedia = new JSObjectMedia();

let result = jsObjMedia.with('abc', 12.33).with('name', "akarmi").asObject();

console.log(result);

//jsObjMedia.with('name','John Doe').with('age', 23).with('female', true);

(async function () {
    let mongoDB = new MongoDB('mongodb://admin:admin@localhost:27017/', 'ddd');
    let conn = await mongoDB.connect();
    let myCollection = await conn.createCollection('myAsyncCollection2');

    console.log(myCollection);

    await conn.close();
})();
