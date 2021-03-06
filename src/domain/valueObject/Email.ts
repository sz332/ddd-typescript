import { ValueObject } from "../../core/ValueObject";
import { Media, MediaSupport } from "../../core/Media";

export interface EmailProps {
    value: string;
}

export class Email extends ValueObject<EmailProps> implements MediaSupport {

    private constructor(props: EmailProps) {
        super(props);
    }

    public static create(email: string): Email {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            throw new Error("Email address is invalid");
        }

        return new Email({ value: email });
    }

    value(): string {
        return this.props.value;
    }

    matches(email: string): boolean {
        return this.props.value === email;
    }

    with<T extends Media>(media: T): T {
        return media.with('email', this.props.value);
    }

}