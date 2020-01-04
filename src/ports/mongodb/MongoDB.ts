import { MongoClient } from "mongodb";
import { MongoDBConnection } from "./MongoDBConnection";

export class MongoDB {

    url: string;
    dbname: string;

    constructor(url: string, dbname: string) {
        this.url = url;
        this.dbname = dbname;
    }

    async connect(): Promise<MongoDBConnection> {

        const url = this.url;
        const dbname = this.dbname;

        const promise = new Promise<MongoDBConnection>((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(new MongoDBConnection(db.db(dbname)));
                }
            });
        });

        return promise;
    }

}