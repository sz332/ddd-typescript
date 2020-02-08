import { Module } from '@nestjs/common';
import { CatsController } from './CatsController';
import { GetUserController } from '../../domain/useCases/getUser/GetUserController';
import { InMemoryUserRepository } from '../../domain/repository/InMemoryUserRepository';
import { GetUserUseCase } from '../../domain/useCases/getUser/GetUserUseCase';

@Module({
  imports: [],
  controllers: [CatsController, GetUserController],
  providers: [{
    provide: 'UserRepository',
    useClass: InMemoryUserRepository
  }, 
  {
    provide: GetUserUseCase,
    useClass: GetUserUseCase
  }],
})
export class AppModule {
    
}