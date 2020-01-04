import { UserRepository } from "./UserRepository";
import { User } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";
import { MongoDBConnection } from "../../ports/mongodb/MongoDBConnection";

const USERS_COLLECTION = 'users';

export class MongoDBUserRepository implements UserRepository {

    private readonly connection: MongoDBConnection;

    public constructor(connection: MongoDBConnection) {
        this.connection = connection;
    }

    async add(user: User): Promise<void> {

        this.connection.findCollection(USERS_COLLECTION).then(collection => {
            collection.insert(user);
        }
        );

    }

    async remove(id: UniqueEntityID): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findBy(id: UniqueEntityID): Promise<Result<User>> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<ReadonlyArray<User>> {
        throw new Error("Method not implemented.");
    }

}