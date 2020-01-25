import { UseCase } from "../../core/UseCase";
import { UserRepository } from "../repository/UserRepository";
import { Result } from "../../core/Result";
import { User } from "../entity/User";
import { Email } from "../valueObject/Email";
import { Password } from "../valueObject/Password";
import { UniqueEntityID } from "../../core/UniqueEntityID";

interface GetUserRequestDTO{
    id: string
}

export class GetUserUseCase implements UseCase<GetUserRequestDTO, any> {

    private readonly userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    public async execute(request: GetUserRequestDTO): Promise<Result<User>> {
        console.log("Executed get user use case");
        let user = await this.userRepo.findBy(new UniqueEntityID(request.id));
        return user;
    }

}

