import { Result } from '../../core/Result';
import { MongoDBConnection } from './MongoDBConnection';
import * as monk from "monk";

export class MongoDB {

    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    public connect(): void {
        const db = require('monk')(this.url);        
        const users = db.get('users')
        users.insert({ name: 'Tobi', bigdata: {} });
        db.close();
    }

}