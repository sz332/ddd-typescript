import { User } from "../entity/User";
import { Result } from "../../core/Result";
import { UniqueEntityID } from "../../core/UniqueEntityID";

export interface UserRepository {

    add(user: User): Promise<void>;
    remove(id: UniqueEntityID): Promise<void>;
    findBy(id: UniqueEntityID): Promise<Result<User>>;
    findAll(): Promise<ReadonlyArray<User>>;

}