import { Module } from '@nestjs/common';
import { CatsController } from './CatsController';

@Module({
  imports: [],
  controllers: [CatsController, GetUserController],
  providers: [],
})
export class AppModule {
    
}