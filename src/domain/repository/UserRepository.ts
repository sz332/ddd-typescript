import { User } from "../entity/User";
import { Result } from "../../core/Result";
import { UniqueEntityID } from "../../core/UniqueEntityID";

export interface UserRepository {

    add(user: User): void;
    remove(id: UniqueEntityID): void;
    findBy(id: UniqueEntityID): Result<User>;
    findAll(): ReadonlyArray<User>;

}