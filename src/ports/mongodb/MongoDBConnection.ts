import { Db, Collection } from "mongodb";

export class MongoDBConnection {

    private readonly db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    async createCollection(name: string): Promise<Collection<any>>{
        return this.db.createCollection(name);
    }

}