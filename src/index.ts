import { MongoDB } from "./ports/mongodb/MongoDB";
import { User } from "./domain/entity/User";
import { Email } from "./domain/valueObject/Email";
import { Password } from "./domain/valueObject/Password";
import { JsObjectMedia } from "./core/Media";

//let jsObjMedia = new JSObjectMedia();
//
//let result = jsObjMedia.with('abc', 12.33).with('name', "akarmi").asObject();
//console.log(result);

//jsObjMedia.with('name','John Doe').with('age', 23).with('female', true);

let user = User.create(Email.create('john.doe@mail.com'), Password.create('12345'));
let media = user.export(new JsObjectMedia());
console.log(media.asObject());

// (async function () {
//     let mongoDB = new MongoDB('mongodb://admin:admin@localhost:27017/', 'ddd');
//     let conn = await mongoDB.connect();
//     let myCollection = await conn.createCollection('myAsyncCollection2');
//     myCollection.insertOne({"name": "John Doe", "age": 23, "female": true});

//     console.log(myCollection);

//     await conn.close();
// })();
