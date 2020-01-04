export interface Persistable <T> {

    import(media : Media) : T;
    export(media: Media) : void;

}

export interface Media {
    with(key: string, value: any): Media;
    of(key: string): any;
    ofString(key: string): string;
}

export class JSObjectMedia implements Media {

    private readonly data: object;

    constructor(data: object = {}) {
        this.data = data;
    }

    with(parameter: string, value: any): JSObjectMedia {
        const clone: any = Object.assign({}, this.data);
        clone[parameter] = value;
        return new JSObjectMedia(clone);
    }

    of(key: string): any {

        const data: any = this.data;

        if (data[key]) {
            return data[key];
        }

        throw new Error("Key " + key + " was missing from media");
    }

    ofString(key: string): string {
        const value: any = this.of(key) as string;

        if (value instanceof String) {
            return value as string;
        }

        throw new Error("Key " + key + " was not a string");
    }

    asObject(): object {
        return this.data;
    }

}