import { Module } from '@nestjs/common';
import { GetUserController } from '../../domain/useCases/getUser/GetUserController';
import { InMemoryUserRepository } from '../../domain/repository/InMemoryUserRepository';
import { GetUserUseCase } from '../../domain/useCases/getUser/GetUserUseCase';

@Module({
  imports: [],
  controllers: [GetUserController],
  providers: [
    {provide: 'GetUserUseCase', useClass: GetUserUseCase},
    {provide: 'UserRepository', useClass: InMemoryUserRepository}
  ],
})
export class AppModule {

}