
export class MongoDBConnection {

    private readonly client: ;

    constructor(client: mongo.MongoClient){
        this.client = client;
    }

    public disconnect(){
        this.client.close();
    }

}