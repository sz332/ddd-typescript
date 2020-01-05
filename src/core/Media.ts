// https://blog.g4s8.wtf/fully-encapsulated/
// https://www.driver733.com/2018/11/25/printers-are-worse-than-getters.html
// https://www.yegor256.com/2016/04/05/printers-instead-of-getters.html

export interface Persistable {
    export(media: Media): object;
}

export interface MediaSupport {

    with(media: Media): Media;

}

export interface Media {
    
    with(key: string, value: any): Media;
    extend(supporter: MediaSupport): Media;

    value(key: string): any;
    valueAsString(key: string): string;

    asObject(): object;
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

    extend(supporter : MediaSupport) : Media {
        const media = new JSObjectMedia(Object.assign({}, this.data));
        return supporter.with(media);
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

    asObject(): object {
        return this.data;
    }

}