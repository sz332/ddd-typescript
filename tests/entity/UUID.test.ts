import { UUID } from "../../src/domain/UUID";
import { notEqual } from "assert";

describe('UUID', () => {

    it('Without constructor, a random uuid is generated', () => {
        let uuid = new UUID();
        notEqual( uuid.asString(), undefined);
    });

    it('With constructor, the provided uuid is used', () => {
        let uuid = new UUID('d931a0a7-13c9-4551-a09f-6a683fd54ef0');
        expect(uuid.asString()).toEqual('d931a0a7-13c9-4551-a09f-6a683fd54ef0');
    });
    
});