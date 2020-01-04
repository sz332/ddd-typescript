import { Db, Collection, MongoClient } from "mongodb";

export class MongoDBConnection {

    protected readonly client: MongoClient;
    private readonly db: Db;

    constructor(client: MongoClient, db: Db) {
        this.client = client;
        this.db = db;
    }

    async findCollection(name: string): Promise<Collection<any>>{
        return this.db.collection(name);
    }

    async createCollection(name: string): Promise<Collection<any>>{
        return this.db.createCollection(name);
    }

    async close(): Promise<void>{
        return this.client.close();
    }

}