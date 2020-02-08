import { UserRepository } from "./UserRepository";
import { User } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";
import { Injectable } from "@nestjs/common";

@Injectable()
export class InMemoryUserRepository implements UserRepository {

    private readonly users: Array<User>;

    constructor() {
        this.users = new Array<User>();
    }

    async add(user: User): Promise<void> {
        this.users.push(user);
    }

    async remove(id: UniqueEntityID): Promise<void> {
        let index = this.users.findIndex(d => id === d.id());
        this.users.splice(index, 1);
    }

    async findBy(id: UniqueEntityID): Promise<Result<User>> {
        let foundUser = this.users.find(u => id === u.id());
        return foundUser ? Result.ok<User>(foundUser) : Result.fail<User>("User not found");
    }

    async findAll(): Promise<ReadonlyArray<User>> {
        return [...this.users];
    }
}
