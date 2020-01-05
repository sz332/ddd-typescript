import { ValueObject } from "../../core/ValueObject";
import bcrypt from "bcrypt";
import { MediaSupport, Media } from "../../core/Media";

export interface PasswordProps {
    value: string;
}

export class Password extends ValueObject<PasswordProps> implements MediaSupport {

    private constructor(props: PasswordProps) {
        super(props);
    }

    public static create(password: string, encrypt: boolean = true): Password {
        if (encrypt) {
            const hash = bcrypt.hashSync(password, 10);
            return new Password({ value: hash });
        } else {
            return new Password({ value: password });
        }
    }

    matches(password: string): boolean {
        return bcrypt.compareSync(password, this.props.value);
    }

    with(media: Media): Media {
        return media.with('password', this.props.value);
    }

}