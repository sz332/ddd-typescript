import { ValueObject } from "../../core/ValueObject";

interface StreetAddressProps {
    value: string
}

export class StreetAddress extends ValueObject<StreetAddressProps>{

    private constructor(props: StreetAddressProps) {
        super(props);
    }

    public static create(name: string): StreetAddress {
        return new StreetAddress({ value: name });
    }

    value(): string {
        return this.props.value;
    }

}
