import { MongoDB } from "./ports/mongodb/MongoDB";

//import { MongoDB } from "./ports/mongodb/MongoDB";

//let mongo = new MongoDB('mongodb://admin:admin@localhost:27017/ddd')
//mongo.connect();


(async function () {
    let mongoDB = new MongoDB('mongodb://admin:admin@localhost:27017/', 'ddd');
    let conn = await mongoDB.connect();
    let myCollection = await conn.createCollection('myAsyncCollection2');

    console.log(myCollection);
})();


// var url = "mongodb://admin:admin@localhost:27017/";

// MongoClient.connect(url, function(err: any, db: any) {

//     if (err) {
//         throw err;
//     }

//   var dbo = db.db("ddd");

//   dbo.createCollection("customers", function(err: any, res: any) {
//     if (err) {
//         throw err;
//     }

//     console.log("Collection created!");
//     db.close();
//   });
// }); 