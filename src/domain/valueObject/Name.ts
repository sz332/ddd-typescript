import { ValueObject } from "../../core/ValueObject";

interface NameProps {
    name: string
}

export class Name extends ValueObject<NameProps>{

    private constructor(props: NameProps) {
        super(props);
    }

    public static create(name: string): Name {
        return new Name({ name });
    }

    name(): string {
        return this.props.name;
    }

}