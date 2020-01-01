import { ValueObject } from "../../core/ValueObject";

interface PhoneNumberProps {
    number: string
}

export class PhoneNumber extends ValueObject<PhoneNumberProps>{

    private constructor(props: PhoneNumberProps) {
        super(props);
    }

    public static create(number: string): PhoneNumber {
        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number) == false) {
            throw new Error("Invalid phone number");
        }

        return new PhoneNumber({ number });
    }

    number(): string {
        return this.props.number;
    }

}
