import uuid from 'uuid/v4';
import { Identifier } from './Identifier'
import { type } from 'os';

export class UniqueEntityID extends Identifier<string | number>{
  constructor (id?: string | number) {

    if (!id || typeof id === "number" || typeof id === "string"){
      super(id ? id : uuid())
    } else {
      console.error("Wrong input parameter type for entity, value = " + id);
    }
  }
}