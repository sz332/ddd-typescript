import { RouterExtension } from "./RouterExtension";
import { Router } from "express";
import compression from "compression";

export class RouterCompression implements RouterExtension {

    apply(router: Router): void {
        router.use(compression());
    }
    
}