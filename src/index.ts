import { MongoDB } from "./ports/mongodb/MongoDB";
import { JSObjectMedia, Media } from "./core/Media";
import { User } from "./domain/entity/User";
import { Email } from "./domain/valueObject/Email";
import { Password } from "./domain/valueObject/Password";

//let jsObjMedia = new JSObjectMedia();
//
//let result = jsObjMedia.with('abc', 12.33).with('name', "akarmi").asObject();
//console.log(result);

//jsObjMedia.with('name','John Doe').with('age', 23).with('female', true);


interface Media2 {
    with(key: string, value: string): this;
}

class Media2Impl implements Media2{
    
    with(key: string, value: string) : this {
        return this;
    }

    asObject(): void {

    }

}


class User2{

    export<T extends Media2>(media: T) : T {
        return media.with('a', 'b');
    }

}

let user2 = new User2();
let media2 = user2.export(new Media2Impl());
console.log(media2.asObject());

let user = User.create(Email.create('john.doe@mail.com'), Password.create('12345'));
let media = user.export(new JSObjectMedia()) as JSObjectMedia;
console.log(media.asObject());

(async function () {
    let mongoDB = new MongoDB('mongodb://admin:admin@localhost:27017/', 'ddd');
    let conn = await mongoDB.connect();
    let myCollection = await conn.createCollection('myAsyncCollection2');
    myCollection.insertOne({"name": "John Doe", "age": 23, "female": true});

    console.log(myCollection);

    await conn.close();
})();
