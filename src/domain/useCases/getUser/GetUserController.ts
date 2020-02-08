import { Controller, Get, Req, Param, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from '../../entity/User';
import { JsObjectMedia } from '../../../core/Media';

@Controller()
export class GetUserController {

    constructor (@Inject('GetUserUseCase') private readonly useCase: GetUserUseCase) {
    }

    @Get('users/:id')
    async findById(@Param("id") id: string): Promise<object> {

        let userOrError = await this.useCase.execute({id});

        if (userOrError.isSuccess){
            const user = userOrError.value;
            const media = new JsObjectMedia();
            return user.export(media).asObject();
        }

        throw new HttpException(userOrError.error, HttpStatus.NOT_FOUND);
    }

}