import { threadId } from "worker_threads";

interface ResultProperties<T> {
    isSuccess: boolean;
    value?: T;
    error?: string;
}

export class Result<T> {

    private readonly result: ResultProperties<T>;

    private constructor(result: ResultProperties<T>) {
        this.result = result;
    }

    get isSuccess(): boolean {
        return this.result.isSuccess;
    }

    get isFailed(): boolean {
        return !this.isSuccess;
    }

    get error(): string | undefined {
        return this.result.error;
    }

    get value(): T {

        if (!this.result.value){
            throw new Error("Value was not set in Result");
        }

        return this.result.value;
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result({isSuccess: true, value: value});
    }

    public static fail<U>(error: string): Result<U> {
        return new Result({isSuccess: false, error: error});
    }

}

