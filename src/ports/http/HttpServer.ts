// https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407
// https://zellwk.com/blog/async-await-express/
// https://github.com/stemmlerjs/white-label/tree/master/src/modules/vinyl
// https://stackoverflow.com/questions/28183905/best-way-to-use-oop-in-express-rest-api
// https://docs.nestjs.com/controllers
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

export class HttpServer {

    private readonly port: number;

    constructor(port: number) {
        this.port = port;
    }

    async start() {
          const app = await NestFactory.create(AppModule);
          await app.listen(this.port);
    }

}