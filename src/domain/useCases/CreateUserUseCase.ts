import { UseCase } from "../../core/UseCase";
import { UserRepository } from "../repository/UserRepository";
import { Result } from "../../core/Result";
import { User } from "../entity/User";
import { Email } from "../valueObject/Email";
import { Password } from "../valueObject/Password";

//https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/

interface CreateUserRequestDTO {
    userName: string,
    password: string
}

export class CreateUserUseCase implements UseCase<CreateUserRequestDTO, any> {

    private readonly userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    public async execute(request: CreateUserRequestDTO): Promise<Result<User>> {

        console.log("Executed create user use case");

        let user = User.create(Email.create(request.userName), Password.create(request.password));

        return Result.ok<User>(user);
    }

}

