import { RouterExtension } from "./RouterExtension";
import { Router } from "express";
import parser from "body-parser";

export class RouterBodyParsing implements RouterExtension {

    apply(router: Router): void {
        router.use(parser.urlencoded({ extended: true }));
        router.use(parser.json());
    }

}