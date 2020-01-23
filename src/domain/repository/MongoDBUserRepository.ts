import { UserRepository } from "./UserRepository";
import { User } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";
import { MongoDBConnection } from "../../ports/mongodb/MongoDBConnection";
import { JsObjectMedia } from "../../core/Media";

const USERS_COLLECTION = 'users';

export class MongoDBUserRepository implements UserRepository {

    private readonly connection: MongoDBConnection;

    public constructor(connection: MongoDBConnection) {
        this.connection = connection;
    }

    async add(user: User): Promise<void> {

        this.connection.findCollection(USERS_COLLECTION).then(collection => {
            let media = user.export(new JsObjectMedia());
            collection.insert(media.asObject());
        });

    }

    async remove(id: UniqueEntityID): Promise<void> {
        let collection = await this.connection.findCollection(USERS_COLLECTION);

        const query = { "id": { "$eq": id.toString() } };

        collection.findOneAndDelete(query);
    }

    async findBy(id: UniqueEntityID): Promise<Result<User>> {

        const query = { "id": { "$eq": id.toString() } };

        const options = {};

        return new Promise<Result<User>>((resolve, reject) => {

            this.connection.findCollection(USERS_COLLECTION).then((collection) => {
                collection.findOne(query, options)
                    .then(
                        (document) => {
                            if (document) {
                                resolve(Result.ok(User.createFromDocument(document)));
                            } else {
                                resolve(Result.fail("User not found for id " + id.toString()));
                            }
                        });
            });

        });
    }

    async findAll(): Promise<ReadonlyArray<User>> {
        throw new Error("Method not implemented.");
    }

}