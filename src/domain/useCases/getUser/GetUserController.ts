import { Controller, Get, Req, Param, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from '../../entity/User';

@Controller()
export class GetUserController {

    private readonly useCase: GetUserUseCase;

    constructor (@Inject('GetUserUseCase') useCase: GetUserUseCase) {
        console.log("Injecting usecase into GetUserController, useCase = " + useCase);
        this.useCase = useCase;
    }

    @Get('users/:id')
    async findById(@Param("id") id: string): Promise<User> {

        console.log("Current useCase = " + this.useCase);

        let userOrError = await this.useCase.execute({id});

        if (userOrError.isSuccess){
            return userOrError.value;
        }

        throw new HttpException(userOrError.error, HttpStatus.NOT_FOUND);
    }

}