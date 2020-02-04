// https://blog.g4s8.wtf/fully-encapsulated/
// https://www.driver733.com/2018/11/25/printers-are-worse-than-getters.html
// https://www.yegor256.com/2016/04/05/printers-instead-of-getters.html

export interface Persistable {

    export<T extends Media>(media: T): T;

}

export interface MediaSupport {

    with<T extends Media>(media: T): T;

}

export interface Media {

    with(key: string, value: unknown): this;
    extend(mediaSupport: MediaSupport): this;

    value(key: string): unknown;
    valueAsString(key: string): string;
    
}

export class JsObjectMedia implements Media {

    private readonly data: any;

    constructor() {
        this.data = {};
    }

    with(key: string, value: unknown): this {
        this.data[key] = value;
        return this;
    }

    extend(mediaSupport: MediaSupport): this {
        return mediaSupport.with(this);
    }

    value(key: string): unknown {

        const data: any = this.data;

        if (data[key]) {
            return data[key];
        }

        throw new Error("Key " + key + " was missing from media");
    }

    valueAsString(key: string): string {
        const value: any = this.value(key);

        if (value instanceof String) {
            return value as string;
        }

        throw new Error("Key " + key + " was not a string");
    }

    asObject(): object {
        return Object.assign({}, this.data);
    }

}