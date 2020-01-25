import { Router } from "express";

export interface RouterExtension {

    apply(router: Router): void;

}