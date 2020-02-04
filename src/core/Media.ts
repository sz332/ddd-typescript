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

    asObject(): object {
        return Object.assign({}, this.data);
    }

}