import { ValueObject } from "../../core/ValueObject";

interface CountryProps {
    name: string,
    code: string
}

export class Country extends ValueObject<CountryProps>{

    private constructor(props: CountryProps) {
        super(props);
    }

    public static create(name: string, code: string): Country{
        return new Country({ name, code });
    }

    name(): string {
        return this.props.name;
    }

    code(): string {
        return this.props.code;
    }

}