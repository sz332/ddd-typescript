import { UserRepository } from "./UserRepository";
import { User } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";

interface MongoDBConnectionProps {
    uri: string
}

// https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/
export class MongoDBUserRepository implements UserRepository {

    private readonly props: MongoDBConnectionProps;

    public constructor(props: MongoDBConnectionProps){
        this.props = props;
    }

    add(user: User): void {
        throw new Error("Method not implemented.");
    }

    remove(id: UniqueEntityID): void {
        throw new Error("Method not implemented.");
    }

    findBy(id: UniqueEntityID): Result<User> {
        throw new Error("Method not implemented.");
    }

    findAll(): readonly User[] {
        throw new Error("Method not implemented.");
    }

}