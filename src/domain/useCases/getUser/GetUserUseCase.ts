import { UseCase } from "../../../core/UseCase";
import { UserRepository } from "../../repository/UserRepository";
import { Result } from "../../../core/Result";
import { User } from "../../entity/User";
import { UniqueEntityID } from "../../../core/UniqueEntityID";
import { Inject, Injectable } from "@nestjs/common";

interface GetUserRequestDTO {
    id: string
}

@Injectable()
export class GetUserUseCase implements UseCase<GetUserRequestDTO, any> {

    private readonly userRepo: UserRepository;

    constructor(@Inject('UserRepository') userRepo : UserRepository) {
        console.log("Injecting user repository into GetUserCase, userRepo = " + userRepo);
        this.userRepo = userRepo;
    }

    public async execute(request: GetUserRequestDTO): Promise<Result<User>> {
        console.log("Executed get user use case");
        let user = await this.userRepo.findBy(new UniqueEntityID(request.id));
        return user;
    }

}

