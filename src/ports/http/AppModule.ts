import { Module } from '@nestjs/common';
import { CatsController } from './CatsController';
import { GetUserController } from '../../domain/useCases/getUser/GetUserController';

@Module({
  imports: [],
  controllers: [CatsController, GetUserController],
  providers: [],
})
export class AppModule {
    
}