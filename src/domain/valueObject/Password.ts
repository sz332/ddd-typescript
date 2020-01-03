import { ValueObject } from "../../core/ValueObject";
import bcrypt from "bcrypt";

export interface PasswordProps {
    value: string;
}

export class Password extends ValueObject<PasswordProps>{

    private constructor(props: PasswordProps) {
        super(props);
    }

    public static create(password: string): Password {
        let hash = bcrypt.hashSync(password, 10);
        return new Password({ value: hash });
    }

    matches(password: string): boolean {
        return bcrypt.compareSync(password, this.props.value);
    }

}