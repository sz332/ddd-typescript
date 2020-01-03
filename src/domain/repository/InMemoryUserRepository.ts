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

    remove(id: UniqueEntityID): void {
        let index = this.users.findIndex(d => id.equals(d.id()));
        this.users.splice(index, 1);
    }

    findBy(id: UniqueEntityID): Result<User> {
        let foundUser = this.users.find(u => id.equals(u.id()));
        return foundUser ? Result.ok<User>(foundUser) : Result.fail<User>("User not found");
    }

    findAll(): ReadonlyArray<User> {
        return [...this.users];
    }
}
