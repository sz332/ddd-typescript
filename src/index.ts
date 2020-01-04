import { MongoDB } from "./ports/mongodb/MongoDB";

let mongo = new MongoDB('localhost/ddd')
mongo.connect();