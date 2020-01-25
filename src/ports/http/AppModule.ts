import { Module } from '@nestjs/common';
import { CatsController } from './CatsController';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {
    
}