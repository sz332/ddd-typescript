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

    constructor(@Inject('UserRepository') private readonly userRepo : UserRepository) {
    }

    public async execute(request: GetUserRequestDTO): Promise<Result<User>> {
        let user = await this.userRepo.findBy(new UniqueEntityID(request.id));
        return user;
    }

}

