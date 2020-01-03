import { User } from "../entity/User";
import { Result } from "../../core/Result";

export interface UserRepository {

    add(user: User): void;
    remove(id: string): void;
    findBy(id: string): Result<User>;
    findAll(): ReadonlyArray<User>;

}