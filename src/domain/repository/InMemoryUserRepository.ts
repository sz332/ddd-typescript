import { UserRepository } from "./UserRepository";
import { User } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";


export class InMemoryUserRepository implements UserRepository {

    private readonly users: Array<User>;

    constructor() {
        this.users = new Array<User>();
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(id: string): void {
        let idToFind = new UniqueEntityID(id);
        let index = this.users.findIndex(d => idToFind.equals(d.id()));
        this.users.splice(index, 1);
    }

    findBy(id: string): Result<User> {
        let idToFind = new UniqueEntityID(id);
        let foundUser = this.users.find(u => idToFind.equals(u.id()));
        return foundUser ? Result.ok<User>(foundUser) : Result.fail<User>("User not found");
    }

    findAll(): ReadonlyArray<User> {
        return [...this.users];
    }

}