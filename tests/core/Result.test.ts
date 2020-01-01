import { Result } from "../../src/core/Result";
import { notEqual } from "assert";

class MyClass {

    public message: string;

    constructor(message: string){
        this.message = message;
    }

}

describe('Result', () => {

    it('With ok result, correct values are set', () => {

        let result = Result.ok<MyClass>(new MyClass("hello world"));

        expect(result.isSuccess).toEqual(true);
        expect(result.isFailed).toEqual(false);
        expect(result.value).toBeInstanceOf(MyClass);
        expect(result.value?.message).toEqual("hello world");
    });
    
});