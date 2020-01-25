// https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407
// https://zellwk.com/blog/async-await-express/
// https://github.com/stemmlerjs/white-label/tree/master/src/modules/vinyl

import http from "http";
import express, { Router } from "express";
import { RouterExtension } from "./router/RouterExtension";

export class HttpServer {

    private readonly port: number;
    private readonly extensions: Array<RouterExtension>;

    constructor(port: number, extensions: Array<RouterExtension>) {
        this.port = port;
        this.extensions = extensions;
    }

    start() {
        const router = express();

        for (let extension of this.extensions) {
            extension.apply(router);
        }

        const server = http.createServer(router);

        server.listen(this.port, () =>
            console.log(`Server is running http://localhost:${this.port}...`)
        );
    }

}