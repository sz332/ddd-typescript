import { Controller, Get, Req, Param, HttpException, HttpStatus } from '@nestjs/common';
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from '../../entity/User';

@Controller()
export class GetUserController {

    private useCase: GetUserUseCase;
  
    constructor (useCase: GetUserUseCase) {
      this.useCase = useCase;
    }

    @Get('users/:id')
    async findById(@Param() id: string): Promise<User> {
        let userOrError = await this.useCase.execute({id: id});

        if (userOrError.isSuccess){
            return userOrError.value;
        }

        throw new HttpException(userOrError.error, HttpStatus.NOT_FOUND);
    }

}