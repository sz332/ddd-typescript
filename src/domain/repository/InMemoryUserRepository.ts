import { UserRepository } from "./UserRepository";
import { User, UserType } from "../entity/User";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Result } from "../../core/Result";
import { Injectable } from "@nestjs/common";
import { Password } from "../valueObject/Password";
import { Email } from "../valueObject/Email";

@Injectable()
export class InMemoryUserRepository implements UserRepository {

    private readonly users: Array<User>;

    constructor() {
        this.users = new Array<User>();
        this.users.push(User.create(Email.create('test@mail.com'), Password.create('12345'), UserType.NORMAL, new UniqueEntityID(2)));
    }

    async add(user: User): Promise<void> {
        this.users.push(user);
    }

    async remove(id: UniqueEntityID): Promise<void> {
        let index = this.users.findIndex(d => id === d.id());
        this.users.splice(index, 1);
    }

    async findBy(id: UniqueEntityID): Promise<Result<User>> {

        console.log("Find user by id = " + id.toString());

        let foundUser = this.users.find(u => id.toValue() == u.id().toValue());
        return foundUser ? Result.ok<User>(foundUser) : Result.fail<User>("User not found");
    }

    async findAll(): Promise<ReadonlyArray<User>> {
        return [...this.users];
    }
}
