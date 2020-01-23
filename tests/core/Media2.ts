export interface Persistable {

    export<T extends Media>(media: T): T;

}

export interface MediaSupport {

    with<T extends Media>(media: T): T;

}

export interface Media {

    with(key: string, value: any): this;
    extend(mediaSupport: MediaSupport): this;

    value(key: string): any;
    valueAsString(key: string): string;
    
}

export class JsonMedia implements Media {

    private readonly data: object;

    constructor() {
        this.data = {};
    }

    with(key: string, value: any): this {
        this.data[key] = value;
        return this;
    }

    extend(mediaSupport: MediaSupport): this {
        return mediaSupport.with(this);
    }

    asObject(): object {
        return Object.assign({}, this.data);
    }

    value(key: string): any {

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

}

export class InternalBean implements MediaSupport {

    with<T extends Media>(media: T): T {
        return media.with('name', 'internalBean');
    }

}

export class MyBean implements Persistable {

    private readonly internal: InternalBean;

    constructor() {
        this.internal = new InternalBean();
    }

    export<T extends Media>(media: T): T {
        return media.with('myBean', '23').extend(this.internal);
    }

}

let myBean = new MyBean();
let exporter = new JsonMedia();
let o = myBean.export(exporter);
console.log(o.asObject());