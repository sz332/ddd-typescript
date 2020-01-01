import { ValueObject } from "../../core/ValueObject";

interface StreetAddressProps {
    name: string
}

export class StreetAddress extends ValueObject<StreetAddressProps>{

    private constructor(props: StreetAddressProps) {
        super(props);
    }

    public static create(name: string): StreetAddress {
        return new StreetAddress({ name });
    }

    name(): string {
        return this.props.name;
    }

}
