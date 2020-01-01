import { ValueObject } from "../../core/ValueObject";

interface NameProps {
    value: string
}

export class Name extends ValueObject<NameProps>{

    private constructor(props: NameProps) {
        super(props);
    }

    public static create(name: string): Name {
        return new Name({ value: name });
    }

    value(): string {
        return this.props.value;
    }

}